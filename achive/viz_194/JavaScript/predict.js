// predict function
function predictModel(data, thetas) {
  let finalPrediction = 0;
  Object.entries(thetas).forEach(theta => {
    let thetaName = theta[0];
    let thetaValue = theta[1];

    if (thetaName === "INTERCEPT") {
      finalPrediction += thetas[thetaName];
    } else {
      let variablesName = thetaName.split(" ");
      let combinedVariable = 1;
      variablesName.forEach(columnName => {
        combinedVariable *= data[columnName];
      });
      // predcition
      finalPrediction += thetaValue * combinedVariable;
    }
  });
  return finalPrediction;
}
