// Author: Jiahao Xu
var dataset;
var regionBase = [
  "",
  "Eastern",
  "Nairobi",
  "Central",
  "Nyanza",
  "North Eastern",
  "Rift Valley",
  "Coast",
  "Western"
];
// read data and plot
d3.csv("../viz_177/data_clean.csv").then(function(data) {
  dataset = data;
  scatterPlot();
});

var scatterPlot = function() {
  var w = 700;
  var h = 600;
  // padding
  var padding = { top: 50, right: 50, bottom: 30, left: 100 };
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
    .style("font", "15px times")
    .call(xAxis);
  // Y axis
  svg
    .append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding.left + ",0)")
    .style("font", "15px times")
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
      return xScale(d["allRank"]);
    })
    .attr("y1", function(d) {
      return yScale(d["region"]);
    })
    .attr("x2", function(d) {
      return xScale(d["allRank"]);
    })
    .attr("y2", function(d) {
      return yScale(d["region"]);
    })
    .attr("stroke-width", 2)
    .attr("stroke", function(d) {
      if (parseFloat(d["allRank"]) > parseFloat(d["allRank"])) {
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
    .attr("x2", xRange[0] + 25)
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

  // reference group
  svg
    .append("g")
    .selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("class", "base")
    .attr("cx", function(d) {
      return xScale(d["allRank"]);
    })
    .attr("cy", function(d) {
      return yScale(d["region"]);
    })
    .attr("r", 8)
    .attr("fill", "#A77C86")
    .on("mouseover", function(d) {
      console.log(d3.event.pageX, d3.event.pageY);
      // set style
      d3.select(".reference")
        .style("left", d3.event.pageX - 100 + "px")
        .style("top", d3.event.pageY - 130 + "px");
      // update value
      d3.selectAll("#region").text(d["region"]);
      d3.select(".reference#value").text(d["all"]);
      d3.select(".reference#rank").text(d["allRank"]);
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
      return xScale(d["allRank"]);
    })
    .attr("cy", function(d) {
      return yScale(d["region"]);
    })
    .attr("r", 8)
    .attr("fill", "#17264F")
    .on("mouseover", function(d) {
      // set style
      d3.select(".compareTooltip")
        .style("left", d3.event.pageX - 100 + "px")
        .style("top", d3.event.pageY - 150 + "px");
      // update value
      d3.selectAll("#region").text(d["region"]);
      d3.select(".compareTooltip#value").text(d["all"]);
      d3.select(".compareTooltip#rank").text(d["allRank"]);
      d3.select("#level").text("All of the Decisions");
      d3.select("#rankMove").text(d["allRank"] - d["allRank"]);

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
      // all
      case "all":
        svg
          .selectAll(".compare")
          .transition()
          .duration(1000)
          .attr("cx", function(d) {
            return xScale(d["allRank"]);
          });
        svg
          .selectAll(".moveTrend")
          .transition()
          .duration(1000)
          .attr("x2", function(d) {
            return xScale(d["allRank"]);
          })
          .attr("stroke", function(d) {
            if (parseFloat(d["allRank"]) > parseFloat(d["allRank"])) {
              return "limegreen";
            } else {
              return "red";
            }
          });
        svg.selectAll("circle.compare").on("mouseover", function(d) {
          // set style
          d3.select(".compareTooltip")
            .style("left", d3.event.pageX - 100 + "px")
            .style("top", d3.event.pageY - 130 + "px");
          // update value
          d3.selectAll("#region").text(d["region"]);
          d3.select(".compareTooltip#value").text(d["all"]);
          d3.select(".compareTooltip#rank").text(d["allRank"]);
          d3.select("#level").text("All of the Decisions");
          d3.select("#rankMove").text(d["allRank"] - d["allRank"]);

          // show tooltip
          d3.select(".compareTooltip").classed("hidden", false);
        });
        break;

      // none
      case "none":
        svg
          .selectAll(".compare")
          .transition()
          .duration(1000)
          .attr("cx", function(d) {
            return xScale(d["noneRank"]);
          });
        svg
          .selectAll(".moveTrend")
          .transition()
          .duration(1000)
          .attr("x2", function(d) {
            return xScale(d["noneRank"]);
          })
          .attr("stroke", function(d) {
            if (parseFloat(d["allRank"]) > parseFloat(d["noneRank"])) {
              return "limegreen";
            } else {
              return "red";
            }
          });
        svg.selectAll("circle.compare").on("mouseover", function(d) {
          // set style
          d3.select(".compareTooltip")
            .style("left", d3.event.pageX - 100 + "px")
            .style("top", d3.event.pageY - 150 + "px");
          // update value
          d3.selectAll("#region").text(d["region"]);
          d3.select(".compareTooltip#value").text(d["none"]);
          d3.select(".compareTooltip#rank").text(d["noneRank"]);
          d3.select("#level").text("None of the Decisions");
          d3.select("#rankMove").text(d["allRank"] - d["noneRank"]);

          // show tooltip
          d3.select(".compareTooltip").classed("hidden", false);
        });
        break;

      // healthCare
      case "healthCare":
        svg
          .selectAll(".compare")
          .transition()
          .duration(1000)
          .attr("cx", function(d) {
            return xScale(d["healthCareRank"]);
          });
        svg
          .selectAll(".moveTrend")
          .transition()
          .duration(1000)
          .attr("x2", function(d) {
            return xScale(d["healthCareRank"]);
          })
          .attr("stroke", function(d) {
            if (parseFloat(d["allRank"]) > parseFloat(d["healthCareRank"])) {
              return "limegreen";
            } else {
              return "red";
            }
          });
        svg.selectAll("circle.compare").on("mouseover", function(d) {
          // set style
          d3.select(".compareTooltip")
            .style("left", d3.event.pageX - 100 + "px")
            .style("top", d3.event.pageY - 150 + "px");
          // update value
          d3.selectAll("#region").text(d["region"]);
          d3.select(".compareTooltip#value").text(d["healthCare"]);
          d3.select(".compareTooltip#rank").text(d["healthCareRank"]);
          d3.select("#level").text("Own Health Care");
          d3.select("#rankMove").text(d["allRank"] - d["healthCareRank"]);

          // show tooltip
          d3.select(".compareTooltip").classed("hidden", false);
        });
        break;

      // purchase
      case "purchase":
        svg
          .selectAll(".compare")
          .transition()
          .duration(1000)
          .attr("cx", function(d) {
            return xScale(d["purchaseRank"]);
          });
        svg
          .selectAll(".moveTrend")
          .transition()
          .duration(1000)
          .attr("x2", function(d) {
            return xScale(d["purchaseRank"]);
          })
          .attr("stroke", function(d) {
            if (parseFloat(d["allRank"]) > parseFloat(d["purchaseRank"])) {
              return "limegreen";
            } else {
              return "red";
            }
          });
        svg.selectAll("circle.compare").on("mouseover", function(d) {
          // set style
          d3.select(".compareTooltip")
            .style("left", d3.event.pageX - 100 + "px")
            .style("top", d3.event.pageY - 150 + "px");
          // update value
          d3.selectAll("#region").text(d["region"]);
          d3.select(".compareTooltip#value").text(d["purchase"]);
          d3.select(".compareTooltip#rank").text(d["purchaseRank"]);
          d3.select("#level").text("Making Large Purchases");
          d3.select("#rankMove").text(d["allRank"] - d["purchaseRank"]);

          // show tooltip
          d3.select(".compareTooltip").classed("hidden", false);
        });
        break;

      // family
      case "family":
        svg
          .selectAll(".compare")
          .transition()
          .duration(1000)
          .attr("cx", function(d) {
            return xScale(d["familyRank"]);
          });
        svg
          .selectAll(".moveTrend")
          .transition()
          .duration(1000)
          .attr("x2", function(d) {
            return xScale(d["familyRank"]);
          })
          .attr("stroke", function(d) {
            if (parseFloat(d["allRank"]) > parseFloat(d["familyRank"])) {
              return "limegreen";
            } else {
              return "red";
            }
          });
        svg.selectAll("circle.compare").on("mouseover", function(d) {
          // set style
          d3.select(".compareTooltip")
            .style("left", d3.event.pageX - 100 + "px")
            .style("top", d3.event.pageY - 150 + "px");
          // update value
          d3.selectAll("#region").text(d["region"]);
          d3.select(".compareTooltip#value").text(d["family"]);
          d3.select(".compareTooltip#rank").text(d["familyRank"]);
          d3.select("#level").text("Visits to Family, Relatives, Friends");
          d3.select("#rankMove").text(d["allRank"] - d["familyRank"]);

          // show tooltip
          d3.select(".compareTooltip").classed("hidden", false);
        });
        break;
    }
  });
};
