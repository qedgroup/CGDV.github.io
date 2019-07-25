function predictionPlot(years, responses, predictedResponses, graphDimensions) {
  let width = graphDimensions.width;
  let height = graphDimensions.height;
  let padding = graphDimensions.padding;

  // Set range
  let xRange = [padding.left, width - padding.right];
  let yRange = [height - padding.bottom, padding.top];

  // Set domain
  let xDomain = years;
  let yDomain = [
    Math.min(
      Math.min.apply(null, responses),
      Math.min.apply(null, predictedResponses)
    ),
    Math.max(
      Math.max.apply(null, responses),
      Math.max.apply(null, predictedResponses)
    )
  ];

  // Set scale
  let xScale = d3
    .scalePoint()
    .range(xRange)
    .domain(xDomain)
    .padding(0.5);
  let yScale = d3
    .scaleLinear()
    .rangeRound(yRange)
    .domain(yDomain)
    .nice();

  // Set axis
  let xAxis = d3
    .axisBottom()
    .scale(xScale)
    .ticks(10);
  let yAxis = d3
    .axisLeft()
    .scale(yScale)
    .ticks(10);

  // create svg
  let svgPredicitonPlot = d3
    .select("#prediction-plot")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Create X axis
  svgPredicitonPlot
    .append("g")
    .attr("id", "predictionPlot-xAxis")
    .attr("transform", `translate(0, ${height - padding.bottom})`)
    .call(xAxis);
  // Add X axis label
  svgPredicitonPlot
    .append("text")
    .attr("id", "predictionPlot-label")
    .attr(
      "transform",
      `translate(${(width - padding.right - padding.left) / 2 +
        padding.right}, ${height - padding.bottom + 40})`
    )
    .style("text-anchor", "middle")
    .text("Year");

  // Create Y axis
  svgPredicitonPlot
    .append("g")
    .attr("id", "predictionPlot-yAxis")
    .attr("transform", `translate(${padding.left}, 0)`)
    .call(yAxis);

  // Add Y axis label
  svgPredicitonPlot
    .append("text")
    .attr("id", "predictionPlot-label")
    .attr(
      "transform",
      `translate(30, ${(height - padding.bottom - padding.top) / 2 +
        padding.top}) rotate(-90)`
    )
    .style("text-anchor", "middle")
    .text("Food Security Index");

  // Create tooltip
  let tipTrue = d3
    .tip()
    .attr("class", "d3-tip")
    .offset([-10, 0])
    .html(function(i) {
      return ` <strong>${country}</strong><br>
      <strong>Year: </strong> <span style='color:red'>${years[i]}</span><br>
      <strong>Index(Actual):</strong> <span style='color:red'>${
        responses[i]
      }</span>`;
    });
  svgPredicitonPlot.call(tipTrue);

  let tipPredict = d3
    .tip()
    .attr("class", "d3-tip")
    .offset([-10, 0])
    .html(function(i) {
      return ` <strong>${country}</strong><br>
    <strong>Year: </strong> <span style='color:red'>${years[i]}</span><br>
    <strong>Index(Predict):</strong> <span style='color:red'>${predictedResponses[
      i
    ].toFixed(1)}</span>`;
    });
  svgPredicitonPlot.call(tipPredict);

  let tipPredictFuture = d3
    .tip()
    .attr("class", "d3-tip")
    .offset([-10, 0])
    .html(function(i) {
      return ` <strong>${country}</strong><br>
  <strong>Future Prediction</strong> <br>
  <strong>Index(Predict):</strong> <span style='color:red' id ="future-prediction-tooltip">${predictedResponses
    .slice(-1)[0]
    .toFixed(1)}</span>`;
    });
  svgPredicitonPlot.call(tipPredictFuture);

  // symbol generator
  let symbolGenerator = d3.symbol();

  // Add data points for true case
  svgPredicitonPlot
    .append("g")
    .selectAll(".trueValue")
    .data(Array.from(Array(responses.length).keys()))
    .enter()
    .append("path")
    .attr("transform", i => {
      return `translate(${xScale(years[i])}, ${yScale(responses[i])})`;
    })
    .attr("d", symbolGenerator.type(d3.symbolSquare).size(200))
    .attr("fill", "#2c5b6b")
    .attr("class", "trueValue")
    .on("mouseover", tipTrue.show)
    .on("mouseout", tipTrue.hide);

  // Add data points for predict case in the past
  svgPredicitonPlot
    .append("g")
    .selectAll(".predictedValue")
    .data(Array.from(Array(predictedResponses.length).keys()))
    .enter()
    .append("path")
    .attr("transform", i => {
      return `translate(${xScale(years[i])}, ${yScale(predictedResponses[i])})`;
    })
    .attr("d", symbolGenerator.type(d3.symbolStar).size(50))
    .attr("fill", "#abcb77")
    .attr("class", "predictedValue")
    .on("mouseover", tipPredict.show)
    .on("mouseout", tipPredict.hide);

  // Add data point for predict case in the futrue
  svgPredicitonPlot
    .append("g")
    .selectAll(".predictedValue")
    .data([0])
    .enter()
    .append("path")
    .attr(
      "transform",
      `translate(${xScale(years.slice(-1)[0])}, 
    ${yScale(predictedResponses.slice(-1)[0])})`
    )
    .attr("d", symbolGenerator.type(d3.symbolStar).size(50))
    .attr("fill", "#650d37")
    .attr("id", "future-prediction")
    .on("mouseover", tipPredictFuture.show)
    .on("mouseout", tipPredictFuture.hide);

  // Add legend
  legendDomains = ["Actual", "Predict", "Future"];
  legendRanges = ["#2c5b6b", "#abcb77", "#650d37"];
  legendShapes = [
    symbolGenerator.type(d3.symbolSquare).size(100)(),
    symbolGenerator.type(d3.symbolStar).size(100)(),
    symbolGenerator.type(d3.symbolStar).size(100)()
  ];

  for (let i = 0; i < legendDomains.length; i++) {
    let ordinal = d3
      .scaleOrdinal()
      .domain([legendDomains[i]])
      .range([legendRanges[i]]);
    let legendOrdinal = d3
      .legendColor()
      .shape("path", legendShapes[i])
      //.shapePadding(60)
      .orient("horizontal")
      .scale(ordinal);

    svgPredicitonPlot
      .append("g")
      .attr("class", "legend-ordinal")
      .attr("id", `${legendDomains[i]}`)
      .attr(
        "transform",
        `translate(${width / 2 - padding.left + i * 60},${padding.top / 2})`
      );
    svgPredicitonPlot
      .select(`.legend-ordinal#${legendDomains[i]}`)
      .call(legendOrdinal);
  }
}

// update based on user's input
function updatePredictionPlot(result, years, responses, predictedResponses) {
  let width = graphDimensions.width;
  let height = graphDimensions.height;
  let padding = graphDimensions.padding;

  // Set range
  let xRange = [padding.left, width - padding.right];
  let yRange = [height - padding.bottom, padding.top];

  // Set domain
  let xDomain = years;
  let yDomain = [
    Math.min(
      Math.min.apply(null, responses),
      Math.min.apply(null, predictedResponses),
      result
    ),
    Math.max(
      Math.max.apply(null, responses),
      Math.max.apply(null, predictedResponses),
      result
    )
  ];

  // Set scale
  let xScale = d3
    .scalePoint()
    .range(xRange)
    .domain(xDomain)
    .padding(0.5);
  let yScale = d3
    .scaleLinear()
    .rangeRound(yRange)
    .domain(yDomain)
    .nice();

  // Set axis
  let xAxis = d3
    .axisBottom()
    .scale(xScale)
    .ticks(10);
  let yAxis = d3
    .axisLeft()
    .scale(yScale)
    .ticks(10);

  // Update svg
  let svg = d3.select("#prediction-plot");
  // Update y axis
  svg.select("#predictionPlot-yAxis").call(yAxis);
  //
  d3.select("#prediction-plot")
    .selectAll(".trueValue")
    .data(Array.from(Array(responses.length).keys()))
    .transition()
    .duration(1000)
    .attr("transform", i => {
      return `translate(${xScale(years[i])}, ${yScale(responses[i])})`;
    });
  d3.select("#prediction-plot")
    .selectAll(".predictedValue")
    .data(Array.from(Array(predictedResponses.length).keys()))
    .transition()
    .duration(1000)
    .attr("transform", i => {
      return `translate(${xScale(years[i])}, ${yScale(predictedResponses[i])})`;
    });

  // update new prediction for future
  // update tooltip
  let tipPredictFuture = d3
    .tip()
    .attr("class", "d3-tip")
    .offset([-10, 0]).html(` <strong>${country}</strong><br>
<strong>Future Prediction</strong> <br>
<strong>Index(Predict):</strong> <span style='color:red' id ="future-prediction-tooltip">${Math.round(
    result * 10
  ) / 10}</span>`);

  svg
    .select("#future-prediction")
    .transition()
    .duration(1000)
    .attr(
      "transform",
      `translate(${xScale(years.slice(-1)[0])}, ${yScale(result)})`
    );
  svg
    .select("#future-prediction")
    .data([result])
    .call(tipPredictFuture)
    .on("mouseover", tipPredictFuture.show)
    .on("mouseout", tipPredictFuture.hide);
}
