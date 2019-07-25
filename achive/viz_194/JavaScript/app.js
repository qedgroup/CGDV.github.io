// theat
let thetasInput = {
  INTERCEPT: 21.264088415387995,
  OpAcGov: -7.131073820476185,
  InDev: 13.987753139257336,
  EconPolicy: 3.8744297472530738,
  GovCap: 10.210422113384395,
  CivilSocCap: 10.333068863039456,
  CitizenCap: -1.4570284268034113,
  CapEcon: -10.954530399181856,
  "OpAcGov InDev": 9.396079070566252,
  "OpAcGov EconPolicy": 20.6730096483493,
  "OpAcGov GovCap": 13.63715384932223,
  "OpAcGov CivilSocCap": -14.780461173895269,
  "OpAcGov CitizenCap": 18.367166915659187,
  "OpAcGov CapEcon": 4.47437449647246,
  "InDev EconPolicy": -7.956087865284454,
  "InDev GovCap": 6.578860548032456,
  "InDev CivilSocCap": -17.53038381356519,
  "InDev CitizenCap": -58.56817003545371,
  "InDev CapEcon": 20.903078320741464,
  "EconPolicy GovCap": 8.290586194051796,
  "EconPolicy CivilSocCap": -9.066826869195442,
  "EconPolicy CitizenCap": 25.65869519310509,
  "EconPolicy CapEcon": -42.19494063928475,
  "GovCap CivilSocCap": -13.800101153786173,
  "GovCap CitizenCap": 22.998051005166836,
  "GovCap CapEcon": -7.05816602407209,
  "CivilSocCap CitizenCap": 20.728479557224905,
  "CivilSocCap CapEcon": 34.93279445793699,
  "CitizenCap CapEcon": 23.488665102520216
};

// Country List
let countryList = [
  "Angola",
  "Botswana",
  "Burkina Faso",
  "Burundi",
  "Cameroon",
  "Chad",
  "Congo (Kinshasa)",
  "Cote d'Ivoire",
  "Ethiopia",
  "Ghana",
  "Guinea",
  "Kenya",
  "Madagascar",
  "Malawi",
  "Mali",
  "Mozambique",
  "Niger",
  "Nigeria",
  "Rwanda"
];
let country = countryList[15];
document.querySelector("#country-name").textContent = country;

// set UI vars
const opAcGov = document.querySelector("#open-and-accountable-governance");
const inDev = document.querySelector("#inclusive-development");
const econPolicy = document.querySelector("#economic-policy");
const govCap = document.querySelector("#government-capacity");
const civilSocCap = document.querySelector("#civil-society-capacity");
const citizenCap = document.querySelector("#citizen-capacity");
const capEcon = document.querySelector("#capacity-of-the-economy");

const calculatedPrediction = document.querySelector("#calculated-prediction");
// save current data for plotting
let years = [];
let responses = [];
let predictedResponses = [];

// Set height width and padding
let graphDimensions = {
  width: 500,
  height: 500,
  padding: {
    top: 80,
    bottom: 60,
    left: 70,
    right: 50
  }
};

// let's run app
runApp(country);

function runApp(country) {
  d3.csv("../data/clean_data.csv").then(dataset => {
    //performanceScatterPlot(d, thetasInput);
    // filter dataset
    let data = dataset.filter(d => d.country === country);

    // set placeholder
    let latestData = data[0];
    for (let i = 1; i < data.length; i++) {
      if (latestData["year"] < data[i]) {
        latestData = data[i];
      }
    }
    opAcGov.placeholder = `${parseFloat(latestData.OpAcGov).toFixed(2)} (${
      latestData.year
    })`;
    inDev.placeholder = `${parseFloat(latestData.InDev).toFixed(2)} (${
      latestData.year
    })`;
    econPolicy.placeholder = `${parseFloat(latestData.EconPolicy).toFixed(
      2
    )} (${latestData.year})`;
    govCap.placeholder = `${parseFloat(latestData.GovCap).toFixed(2)} (${
      latestData.year
    })`;
    civilSocCap.placeholder = `${parseFloat(latestData.CivilSocCap).toFixed(
      2
    )} (${latestData.year})`;
    citizenCap.placeholder = `${parseFloat(latestData.CitizenCap).toFixed(
      2
    )} (${latestData.year})`;
    capEcon.placeholder = `${parseFloat(latestData.CapEcon).toFixed(2)} (${
      latestData.year
    })`;

    // start plotting
    // read and clean data
    data.forEach(d => {
      years.push(parseInt(d.year));
      responses.push(parseFloat(d.FoodSecurityIdx));
      predictedResponses.push(predictModel(d, thetasInput));
    });
    years.sort(function(a, b) {
      a - b;
    });
    years.push("Future");

    // draw prediction plot
    predictionPlot(years, responses, predictedResponses, graphDimensions);
  });

  // Listen for submit
  val = document
    .querySelector("#self-reliance-form")
    .addEventListener("submit", function(e) {
      // Hide Result
      document.querySelector("#results").style.display = "none";
      // Show Loader
      document.querySelector("#loading").style.display = "block";
      setTimeout(function() {
        calculateResults(thetasInput);
      }, 1000);

      e.preventDefault();
    });

  function calculateResults(thetas) {
    let data = {
      OpAcGov: opAcGov.value,
      InDev: inDev.value,
      EconPolicy: econPolicy.value,
      GovCap: govCap.value,
      CivilSocCap: civilSocCap.value,
      CitizenCap: citizenCap.value,
      CapEcon: capEcon.value
    };

    // Calculate prediction
    result = predictModel(data, thetas).toFixed(2);
    calculatedPrediction.value = result;
    // Show Result
    document.querySelector("#results").style.display = "block";
    // Hide Loader
    document.querySelector("#loading").style.display = "none";

    // update prediction plot
    updatePredictionPlot(result, years, responses, predictedResponses);
  }
}
