// Author: Jiahao Xu
var dataset;
var regionBase = [
  "",
  "Mizoram",
  "Manipur",
  "Nagaland",
  "Assam",
  "Kerala",
  "Chhattisgarh",
  "Odisha",
  "Puducherry",
  "Meghalaya",
  "Goa",
  "Tripura",
  "Andaman and Nicobar Islands",
  "Tamil Nadu",
  "Lakshadweep",
  "Himachal Pradesh",
  "Maharashtra",
  "West Bengal",
  "Arunachal Pradesh",
  "Jammu & Kashmir",
  "Sikkim",
  "Punjab",
  "Andhra Pradesh",
  "New Delhi",
  "Uttarakhand",
  "Rajasthan",
  "Telangana",
  "Karnataka",
  "Gujarat",
  "Uttar Pradesh",
  "Bihar",
  "Madhya Pradesh",
  "Jharkhand",
  "Haryana",
  "Chandigarh",
  "Daman and Diu",
  "Dadra and Nagar Haveli"
];
// read data and plot
d3.csv("../viz_175/data_clean.csv").then(function(data) {
  dataset = data;
  scatterPlot();
});

var scatterPlot = function() {
  var w = 800;
  var h = 700;
  // padding
  var padding = { top: 40, right: 20, bottom: 30, left: 150 };
  var xRange = [padding.left, w - padding.right];
  var yRange = [];
  for (var i = 0; i <= dataset.length; i++) {
    yRange.push(
      padding.top + ((h - padding.top - padding.bottom) / dataset.length) * i
    );
  }
  // scale function
  var xScale = d3
    .scaleLinear()
    .domain([0, dataset.length])
    .range(xRange);
  var yScale = d3
    .scaleOrdinal()
    .domain(regionBase)
    .range(yRange);

  // axis
  var xAxis = d3
    .axisTop()
    .scale(xScale)
    .ticks(dataset.length + 1);

  var yAxis = d3
    .axisLeft()
    .scale(yScale)
    .ticks(dataset.length + 1);

  // gridlines in x
  function makeXGridlines() {
    return xAxis
      .tickSize(-(yRange[yRange.length - 1] - yRange[0]))
      .tickFormat("");
  }
  // gridlines in y
  function makeYGridlines() {
    return yAxis
      .tickSize(-(xRange[xRange.length - 1] - xRange[0]))
      .tickFormat("");
  }

  // create SVG element
  var svg = d3
    .select("#chart")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("class", "mainChart");

  // create X axis
  svg
    .append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + padding.top + ")")
    .style("font", "12px times")
    .call(xAxis);
  // Y axis
  svg
    .append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding.left + ",0)")
    .call(yAxis);
  // add X gridline
  svg
    .append("g")
    .attr("class", "grid")
    .attr("transform", "translate(0," + padding.top + ")")
    .call(makeXGridlines());
  // add Y gridline
  svg
    .append("g")
    .attr("class", "grid")
    .attr("transform", "translate(" + padding.left + ",0)")
    .call(makeYGridlines());

  // add rank trend line
  svg
    .append("g")
    .selectAll("line")
    .data(dataset)
    .enter()
    .append("line")
    .attr("class", "moveTrend")
    .attr("x1", function(d) {
      return xScale(d["anyRank"]);
    })
    .attr("y1", function(d) {
      return yScale(d["Region"]);
    })
    .attr("x2", function(d) {
      return xScale(d["anyRank"]);
    })
    .attr("y2", function(d) {
      return yScale(d["Region"]);
    })
    .attr("stroke-width", 2)
    .attr("stroke", function(d) {
      if (parseFloat(d["anyRank"]) > parseFloat(d["anyRank"])) {
        return "limegreen";
      } else {
        return "red";
      }
    });
  //    .attr("marker-end", "url(#trianlge)");

  // add axis reference
  svg
    .append("text")
    .attr("transform", "translate(" + xRange[0] + " ," + (yRange[0] - 25) + ")")
    .style("text-anchor", "middle")
    .text("Best");

  // arrow
  svg
    .append("svg:defs")
    .append("svg:marker")
    .attr("id", "arrowRed")
    .attr("refX", 6)
    .attr("refY", 6)
    .attr("markerWidth", 30)
    .attr("markerHeight", 30)
    .attr("markerUnits", "userSpaceOnUse")
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M 0 0 12 6 0 12 3 6")
    .style("opticity", 0.3)
    .style("fill", "red");
  svg
    .append("svg:defs")
    .append("svg:marker")
    .attr("id", "arrowGreen")
    .attr("refX", 6)
    .attr("refY", 6)
    .attr("markerWidth", 30)
    .attr("markerHeight", 30)
    .attr("markerUnits", "userSpaceOnUse")
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M 0 0 12 6 0 12 3 6")
    .style("opticity", 0.3)
    .style("fill", "limegreen");

  svg
    .append("line")
    .attr("x2", xRange[0] + 20)
    .attr("y2", yRange[0] - 30)
    .attr("x1", (xRange[0] + xRange[1]) / 2 - 20)
    .attr("y1", yRange[0] - 30)
    .attr("stroke-width", 2)
    .attr("stroke", "limegreen")
    .attr("marker-end", "url(#arrowGreen)");

  svg
    .append("line")
    .attr("x1", (xRange[0] + xRange[1]) / 2 + 20)
    .attr("y1", yRange[0] - 30)
    .attr("x2", xRange[1] - 30)
    .attr("y2", yRange[0] - 30)
    .attr("stroke-width", 2)
    .attr("stroke", "red")
    .attr("marker-end", "url(#arrowRed)");

  svg
    .append("text")
    .attr("transform", "translate(" + xRange[1] + " ," + (yRange[0] - 25) + ")")
    .style("text-anchor", "middle")
    .text("Worst");

  svg
    .append("text")
    .attr(
      "transform",
      "translate(" + (xRange[0] + xRange[1]) / 2 + " ," + (yRange[0] - 25) + ")"
    )
    .style("text-anchor", "middle")
    .text("Rank");

  // reference group
  svg
    .append("g")
    .selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("class", "base")
    .attr("cx", function(d) {
      return xScale(d["anyRank"]);
    })
    .attr("cy", function(d) {
      return yScale(d["Region"]);
    })
    .attr("r", 3)
    .attr("fill", "#A77C86")
    .on("mouseover", function(d) {
      console.log(d3.event.pageX, d3.event.pageY);
      // set style
      d3.select(".reference")
        .style("left", d3.event.pageX - 100 + "px")
        .style("top", d3.event.pageY - 90 + "px");
      // update value
      d3.selectAll("#region").text(d["Region"]);
      d3.select(".reference#value").text(d["Any"]);
      d3.select(".reference#rank").text(d["anyRank"]);
      // show tooltip
      d3.select(".reference").classed("hidden", false);
    })
    .on("mouseout", function() {
      // hide the tooltip
      d3.select(".reference").classed("hidden", true);
    });

  // compare group
  svg
    .append("g")
    .selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("class", "compare")
    .attr("cx", function(d) {
      return xScale(d["anyRank"]);
    })
    .attr("cy", function(d) {
      return yScale(d["Region"]);
    })
    .attr("r", 3)
    .attr("fill", "#17264F")
    .on("mouseover", function(d) {
      // set style
      d3.select(".compareTooltip")
        .style("left", d3.event.pageX - 100 + "px")
        .style("top", d3.event.pageY - 110 + "px");
      // update value
      d3.selectAll("#region").text(d["Region"]);
      d3.select(".compareTooltip#value").text(d["Any"]);
      d3.select(".compareTooltip#rank").text(d["anyRank"]);
      d3.select("#level").text("any");
      d3.select("#rankMove").text(d["anyRank"] - d["anyRank"]);

      // show tooltip
      d3.select(".compareTooltip").classed("hidden", false);
    })
    .on("mouseout", function() {
      // hide the tooltip
      d3.select(".compareTooltip").classed("hidden", true);
    });

  // update
  d3.select("#dropdown").on("change", function() {
    switch (d3.select(this).property("value")) {
      // any
      case "any":
        svg
          .selectAll(".compare")
          .transition()
          .duration(1000)
          .attr("cx", function(d) {
            return xScale(d["anyRank"]);
          });
        svg
          .selectAll(".moveTrend")
          .transition()
          .duration(1000)
          .attr("x2", function(d) {
            return xScale(d["anyRank"]);
          })
          .attr("stroke", function(d) {
            if (parseFloat(d["anyRank"]) > parseFloat(d["anyRank"])) {
              return "limegreen";
            } else {
              return "red";
            }
          });
        svg.selectAll("circle.compare").on("mouseover", function(d) {
          // set style
          d3.select(".compareTooltip")
            .style("left", d3.event.pageX - 100 + "px")
            .style("top", d3.event.pageY - 110 + "px");
          // update value
          d3.selectAll("#region").text(d["Region"]);
          d3.select(".compareTooltip#value").text(d["Any"]);
          d3.select(".compareTooltip#rank").text(d["anyRank"]);
          d3.select("#level").text("any");
          d3.select("#rankMove").text(d["anyRank"] - d["anyRank"]);

          // show tooltip
          d3.select(".compareTooltip").classed("hidden", false);
        });
        break;

      // mild
      case "mild":
        svg
          .selectAll(".compare")
          .transition()
          .duration(1000)
          .attr("cx", function(d) {
            return xScale(d["mildRank"]);
          });
        svg
          .selectAll(".moveTrend")
          .transition()
          .duration(1000)
          .attr("x2", function(d) {
            return xScale(d["mildRank"]);
          })
          .attr("stroke", function(d) {
            if (parseFloat(d["anyRank"]) > parseFloat(d["mildRank"])) {
              return "limegreen";
            } else {
              return "red";
            }
          });
        svg.selectAll("circle.compare").on("mouseover", function(d) {
          // set style
          d3.select(".compareTooltip")
            .style("left", d3.event.pageX - 100 + "px")
            .style("top", d3.event.pageY - 110 + "px");
          // update value
          d3.selectAll("#region").text(d["Region"]);
          d3.select(".compareTooltip#value").text(d["Mild"]);
          d3.select(".compareTooltip#rank").text(d["mildRank"]);
          d3.select("#level").text("mild");
          d3.select("#rankMove").text(d["anyRank"] - d["mildRank"]);

          // show tooltip
          d3.select(".compareTooltip").classed("hidden", false);
        });
        break;
      // moderate
      case "moderate":
        svg
          .selectAll(".compare")
          .transition()
          .duration(1000)
          .attr("cx", function(d) {
            return xScale(d["moderateRank"]);
          });
        svg
          .selectAll(".moveTrend")
          .transition()
          .duration(1000)
          .attr("x2", function(d) {
            return xScale(d["moderateRank"]);
          })
          .attr("stroke", function(d) {
            if (parseFloat(d["anyRank"]) > parseFloat(d["moderateRank"])) {
              return "limegreen";
            } else {
              return "red";
            }
          });
        svg.selectAll("circle.compare").on("mouseover", function(d) {
          // set style
          d3.select(".compareTooltip")
            .style("left", d3.event.pageX - 100 + "px")
            .style("top", d3.event.pageY - 110 + "px");
          // update value
          d3.selectAll("#region").text(d["Region"]);
          d3.select(".compareTooltip#value").text(d["Moderate"]);
          d3.select(".compareTooltip#rank").text(d["moderateRank"]);
          d3.select("#level").text("moderate");
          d3.select("#rankMove").text(d["anyRank"] - d["moderateRank"]);

          // show tooltip
          d3.select(".compareTooltip").classed("hidden", false);
        });
        break;
      // severe
      case "severe":
        svg
          .selectAll(".compare")
          .transition()
          .duration(1000)
          .attr("cx", function(d) {
            return xScale(d["severeRank"]);
          });
        svg
          .selectAll(".moveTrend")
          .transition()
          .duration(1000)
          .attr("x2", function(d) {
            return xScale(d["severeRank"]);
          })
          .attr("stroke", function(d) {
            if (parseFloat(d["anyRank"]) > parseFloat(d["severeRank"])) {
              return "limegreen";
            } else {
              return "red";
            }
          });
        svg.selectAll("circle.compare").on("mouseover", function(d) {
          // set style
          d3.select(".compareTooltip")
            .style("left", d3.event.pageX - 100 + "px")
            .style("top", d3.event.pageY - 110 + "px");
          // update value
          d3.selectAll("#region").text(d["Region"]);
          d3.select(".compareTooltip#value").text(d["Severe"]);
          d3.select(".compareTooltip#rank").text(d["severeRank"]);
          d3.select("#level").text("severe");
          d3.select("#rankMove").text(d["anyRank"] - d["severeRank"]);

          // show tooltip
          d3.select(".compareTooltip").classed("hidden", false);
        });
        break;
    }
  });
};
