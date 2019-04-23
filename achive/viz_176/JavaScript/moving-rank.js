// Author: Jiahao Xu
var dataset;
var regionBase = [
  "",
  "Kampala",
  "Central 1",
  "South West",
  "Northern",
  "Central 2",
  "Western",
  "East Central",
  "West Nile",
  "Karamoja",
  "Eastern"
];
// read data and plot
d3.csv("../data_clean.csv").then(function(data) {
  dataset = data;
  scatterPlot();
});

var scatterPlot = function() {
  var w = 600;
  var h = 500;
  // padding
  var padding = { top: 20, right: 20, bottom: 20, left: 150 };
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

  /* 
  //line generator
  var line = d3
    .line()
    .x(function(d) {
      return xScale(d["anyRank"]);
    })
    .y(function(d) {
      return yScale(d["Region"]);
    });
  */
  // add rank trend line
  svg
    .append("g")
    .selectAll("line")
    .data(dataset)
    .enter()
    .append("line")
    .attr("class", "moveTrend")
    .attr("x1", function(d) {
      return xScale(d["doctorRank"]);
    })
    .attr("y1", function(d) {
      return yScale(d["region"]);
    })
    .attr("x2", function(d) {
      return xScale(d["doctorRank"]);
    })
    .attr("y2", function(d) {
      return yScale(d["region"]);
    })
    .attr("stroke-width", 2)
    .attr("stroke", function(d) {
      if (parseFloat(d["doctorRank"]) > parseFloat(d["doctorRank"])) {
        return "limegreen";
      } else {
        return "red";
      }
    });
  //    .attr("marker-end", "url(#trianlge)");

  // reference group
  svg
    .append("g")
    .selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("class", "base")
    .attr("cx", function(d) {
      return xScale(d["doctorRank"]);
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
      d3.select(".reference#value").text(d["doctor"]);
      d3.select(".reference#rank").text(d["doctorRank"]);
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
      return xScale(d["doctorRank"]);
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
      d3.select(".compareTooltip#value").text(d["doctor"]);
      d3.select(".compareTooltip#rank").text(d["doctorRank"]);
      d3.select("#level").text("Doctor");
      d3.select("#rankMove").text(d["doctorRank"] - d["doctorRank"]);

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
      // doctor
      case "doctor":
        svg
          .selectAll(".compare")
          .transition()
          .duration(1000)
          .attr("cx", function(d) {
            return xScale(d["doctorRank"]);
          });
        svg
          .selectAll(".moveTrend")
          .transition()
          .duration(1000)
          .attr("x2", function(d) {
            return xScale(d["doctorRank"]);
          })
          .attr("stroke", function(d) {
            if (parseFloat(d["doctorRank"]) > parseFloat(d["doctorRank"])) {
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
          d3.select(".compareTooltip#value").text(d["doctor"]);
          d3.select(".compareTooltip#rank").text(d["doctorRank"]);
          d3.select("#level").text("Doctor");
          d3.select("#rankMove").text(d["doctorRank"] - d["doctorRank"]);

          // show tooltip
          d3.select(".compareTooltip").classed("hidden", false);
        });
        break;

      // nurse
      case "nurse":
        svg
          .selectAll(".compare")
          .transition()
          .duration(1000)
          .attr("cx", function(d) {
            return xScale(d["nurseRank"]);
          });
        svg
          .selectAll(".moveTrend")
          .transition()
          .duration(1000)
          .attr("x2", function(d) {
            return xScale(d["nurseRank"]);
          })
          .attr("stroke", function(d) {
            if (parseFloat(d["doctorRank"]) > parseFloat(d["nurseRank"])) {
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
          d3.select(".compareTooltip#value").text(d["nurse"]);
          d3.select(".compareTooltip#rank").text(d["nurseRank"]);
          d3.select("#level").text("Nurse/Midwife");
          d3.select("#rankMove").text(d["doctorRank"] - d["nurseRank"]);

          // show tooltip
          d3.select(".compareTooltip").classed("hidden", false);
        });
        break;

      // auxNurse
      case "auxNurse":
        svg
          .selectAll(".compare")
          .transition()
          .duration(1000)
          .attr("cx", function(d) {
            return xScale(d["auxNurseRank"]);
          });
        svg
          .selectAll(".moveTrend")
          .transition()
          .duration(1000)
          .attr("x2", function(d) {
            return xScale(d["auxNurseRank"]);
          })
          .attr("stroke", function(d) {
            if (parseFloat(d["doctorRank"]) > parseFloat(d["auxNurseRank"])) {
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
          d3.select(".compareTooltip#value").text(d["auxNurse"]);
          d3.select(".compareTooltip#rank").text(d["auxNurseRank"]);
          d3.select("#level").text("Auxiliary Nurse/Midwife");
          d3.select("#rankMove").text(d["doctorRank"] - d["auxNurseRank"]);

          // show tooltip
          d3.select(".compareTooltip").classed("hidden", false);
        });
        break;

      // other
      case "other":
        svg
          .selectAll(".compare")
          .transition()
          .duration(1000)
          .attr("cx", function(d) {
            return xScale(d["otherRank"]);
          });
        svg
          .selectAll(".moveTrend")
          .transition()
          .duration(1000)
          .attr("x2", function(d) {
            return xScale(d["otherRank"]);
          })
          .attr("stroke", function(d) {
            if (parseFloat(d["doctorRank"]) > parseFloat(d["otherRank"])) {
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
          d3.select(".compareTooltip#value").text(d["other"]);
          d3.select(".compareTooltip#rank").text(d["otherRank"]);
          d3.select("#level").text("Other Health Worker");
          d3.select("#rankMove").text(d["doctorRank"] - d["otherRank"]);

          // show tooltip
          d3.select(".compareTooltip").classed("hidden", false);
        });
        break;

      // traditional
      case "traditional":
        svg
          .selectAll(".compare")
          .transition()
          .duration(1000)
          .attr("cx", function(d) {
            return xScale(d["traditionalRank"]);
          });
        svg
          .selectAll(".moveTrend")
          .transition()
          .duration(1000)
          .attr("x2", function(d) {
            return xScale(d["traditionalRank"]);
          })
          .attr("stroke", function(d) {
            if (
              parseFloat(d["doctorRank"]) > parseFloat(d["traditionalRank"])
            ) {
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
          d3.select(".compareTooltip#value").text(d["traditional"]);
          d3.select(".compareTooltip#rank").text(d["traditionalRank"]);
          d3.select("#level").text("Traditional Birth Attendant");
          d3.select("#rankMove").text(d["doctorRank"] - d["traditionalRank"]);

          // show tooltip
          d3.select(".compareTooltip").classed("hidden", false);
        });
        break;
    }
  });

  // arrow
  svg
    .append("svg:defs")
    .append("svg:marker")
    .attr("id", "trianlge")
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
};
