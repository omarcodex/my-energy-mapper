$( document ).ready(function() {

var stateEnergy =

[
  {
    "State": "ND",
    "Production, U.S. Share": 3.7,
    "Production, Rank": 6,
    "Consumption per Capita, Million Btu": 865,
    "Consumption per Capita, Rank": 3,
    "Expenditures per Capita, Dollars": 11094,
    "Expenditures per Capita, Rank": 1
  },
  {
    "State": "WY",
    "Production, U.S. Share": 10.7,
    "Production, Rank": 2,
    "Consumption per Capita, Million Btu": 917,
    "Consumption per Capita, Rank": 2,
    "Expenditures per Capita, Dollars": 9997,
    "Expenditures per Capita, Rank": 2
  },
  {
    "State": "LA",
    "Production, U.S. Share": 3.3,
    "Production, Rank": 8,
    "Consumption per Capita, Million Btu": 921,
    "Consumption per Capita, Rank": 1,
    "Expenditures per Capita, Dollars": 9766,
    "Expenditures per Capita, Rank": 3
  },
  {
    "State": "AK",
    "Production, U.S. Share": 1.7,
    "Production, Rank": 14,
    "Consumption per Capita, Million Btu": 818,
    "Consumption per Capita, Rank": 4,
    "Expenditures per Capita, Dollars": 9349,
    "Expenditures per Capita, Rank": 4
  },
  {
    "State": "TX",
    "Production, U.S. Share": 20.2,
    "Production, Rank": 1,
    "Consumption per Capita, Million Btu": 478,
    "Consumption per Capita, Rank": 6,
    "Expenditures per Capita, Dollars": 6025,
    "Expenditures per Capita, Rank": 5
  },
  {
    "State": "IA",
    "Production, U.S. Share": 0.9,
    "Production, Rank": 24,
    "Consumption per Capita, Million Btu": 496,
    "Consumption per Capita, Rank": 5,
    "Expenditures per Capita, Dollars": 5796,
    "Expenditures per Capita, Rank": 6
  },
  {
    "State": "ME",
    "Production, U.S. Share": 0.2,
    "Production, Rank": 44,
    "Consumption per Capita, Million Btu": 309,
    "Consumption per Capita, Rank": 27,
    "Expenditures per Capita, Dollars": 5681,
    "Expenditures per Capita, Rank": 7
  },
  {
    "State": "SD",
    "Production, U.S. Share": 0.3,
    "Production, Rank": 39,
    "Consumption per Capita, Million Btu": 459,
    "Consumption per Capita, Rank": 8,
    "Expenditures per Capita, Dollars": 5648,
    "Expenditures per Capita, Rank": 8
  },
  {
    "State": "NE",
    "Production, U.S. Share": 0.5,
    "Production, Rank": 35,
    "Consumption per Capita, Million Btu": 459,
    "Consumption per Capita, Rank": 7,
    "Expenditures per Capita, Dollars": 5486,
    "Expenditures per Capita, Rank": 9
  },
  {
    "State": "MT",
    "Production, U.S. Share": 1.3,
    "Production, Rank": 18,
    "Consumption per Capita, Million Btu": 394,
    "Consumption per Capita, Rank": 14,
    "Expenditures per Capita, Dollars": 5402,
    "Expenditures per Capita, Rank": 10
  },
  {
    "State": "MS",
    "Production, U.S. Share": 0.5,
    "Production, Rank": 34,
    "Consumption per Capita, Million Btu": 386,
    "Consumption per Capita, Rank": 16,
    "Expenditures per Capita, Dollars": 5328,
    "Expenditures per Capita, Rank": 11
  },
  {
    "State": "OK",
    "Production, U.S. Share": 4.1,
    "Production, Rank": 5,
    "Consumption per Capita, Million Btu": 433,
    "Consumption per Capita, Rank": 10,
    "Expenditures per Capita, Dollars": 5283,
    "Expenditures per Capita, Rank": 12
  },
  {
    "State": "VT",
    "Production, U.S. Share": 0.1,
    "Production, Rank": 46,
    "Consumption per Capita, Million Btu": 223,
    "Consumption per Capita, Rank": 43,
    "Expenditures per Capita, Dollars": 5225,
    "Expenditures per Capita, Rank": 13
  },
  {
    "State": "HI",
    "Production, U.S. Share": 0,
    "Production, Rank": 48,
    "Consumption per Capita, Million Btu": 198,
    "Consumption per Capita, Rank": 48,
    "Expenditures per Capita, Dollars": 5195,
    "Expenditures per Capita, Rank": 14
  },
  {
    "State": "IN",
    "Production, U.S. Share": 1.3,
    "Production, Rank": 19,
    "Consumption per Capita, Million Btu": 444,
    "Consumption per Capita, Rank": 9,
    "Expenditures per Capita, Dollars": 5176,
    "Expenditures per Capita, Rank": 15
  },
  {
    "State": "KY",
    "Production, U.S. Share": 2.4,
    "Production, Rank": 12,
    "Consumption per Capita, Million Btu": 401,
    "Consumption per Capita, Rank": 13,
    "Expenditures per Capita, Dollars": 5092,
    "Expenditures per Capita, Rank": 16
  },
  {
    "State": "KS",
    "Production, U.S. Share": 1,
    "Production, Rank": 22,
    "Consumption per Capita, Million Btu": 390,
    "Consumption per Capita, Rank": 15,
    "Expenditures per Capita, Dollars": 5046,
    "Expenditures per Capita, Rank": 17
  },
  {
    "State": "AL",
    "Production, U.S. Share": 1.6,
    "Production, Rank": 16,
    "Consumption per Capita, Million Btu": 404,
    "Consumption per Capita, Rank": 12,
    "Expenditures per Capita, Dollars": 4982,
    "Expenditures per Capita, Rank": 18
  },
  {
    "State": "NH",
    "Production, U.S. Share": 0.2,
    "Production, Rank": 42,
    "Consumption per Capita, Million Btu": 234,
    "Consumption per Capita, Rank": 40,
    "Expenditures per Capita, Dollars": 4790,
    "Expenditures per Capita, Rank": 19
  },
  {
    "State": "WV",
    "Production, U.S. Share": 4.8,
    "Production, Rank": 4,
    "Consumption per Capita, Million Btu": 407,
    "Consumption per Capita, Rank": 11,
    "Expenditures per Capita, Dollars": 4736,
    "Expenditures per Capita, Rank": 20
  },
  {
    "State": "AR",
    "Production, U.S. Share": 1.7,
    "Production, Rank": 15,
    "Consumption per Capita, Million Btu": 376,
    "Consumption per Capita, Rank": 17,
    "Expenditures per Capita, Dollars": 4680,
    "Expenditures per Capita, Rank": 21
  },
  {
    "State": "MN",
    "Production, U.S. Share": 0.5,
    "Production, Rank": 33,
    "Consumption per Capita, Million Btu": 350,
    "Consumption per Capita, Rank": 18,
    "Expenditures per Capita, Dollars": 4638,
    "Expenditures per Capita, Rank": 22
  },
  {
    "State": "WI",
    "Production, U.S. Share": 0.3,
    "Production, Rank": 37,
    "Consumption per Capita, Million Btu": 324,
    "Consumption per Capita, Rank": 23,
    "Expenditures per Capita, Dollars": 4592,
    "Expenditures per Capita, Rank": 23
  },
  {
    "State": "SC",
    "Production, U.S. Share": 0.8,
    "Production, Rank": 26,
    "Consumption per Capita, Million Btu": 338,
    "Consumption per Capita, Rank": 19,
    "Expenditures per Capita, Dollars": 4530,
    "Expenditures per Capita, Rank": 24
  },
  {
    "State": "TN",
    "Production, U.S. Share": 0.6,
    "Production, Rank": 31,
    "Consumption per Capita, Million Btu": 335,
    "Consumption per Capita, Rank": 20,
    "Expenditures per Capita, Dollars": 4523,
    "Expenditures per Capita, Rank": 25
  },
  {
    "State": "OH",
    "Production, U.S. Share": 1.8,
    "Production, Rank": 13,
    "Consumption per Capita, Million Btu": 329,
    "Consumption per Capita, Rank": 21,
    "Expenditures per Capita, Dollars": 4431,
    "Expenditures per Capita, Rank": 26
  },
  {
    "State": "MO",
    "Production, U.S. Share": 0.2,
    "Production, Rank": 40,
    "Consumption per Capita, Million Btu": 314,
    "Consumption per Capita, Rank": 25,
    "Expenditures per Capita, Dollars": 4406,
    "Expenditures per Capita, Rank": 27
  },
  {
    "State": "NJ",
    "Production, U.S. Share": 0.4,
    "Production, Rank": 36,
    "Consumption per Capita, Million Btu": 262,
    "Consumption per Capita, Rank": 37,
    "Expenditures per Capita, Dollars": 4376,
    "Expenditures per Capita, Rank": 28
  },
  {
    "State": "PA",
    "Production, U.S. Share": 8.1,
    "Production, Rank": 3,
    "Consumption per Capita, Million Btu": 305,
    "Consumption per Capita, Rank": 28,
    "Expenditures per Capita, Dollars": 4351,
    "Expenditures per Capita, Rank": 29
  },
  {
    "State": "NM",
    "Production, U.S. Share": 2.9,
    "Production, Rank": 10,
    "Consumption per Capita, Million Btu": 326,
    "Consumption per Capita, Rank": 22,
    "Expenditures per Capita, Dollars": 4325,
    "Expenditures per Capita, Rank": 30
  },
  {
    "State": "CT",
    "Production, U.S. Share": 0.2,
    "Production, Rank": 41,
    "Consumption per Capita, Million Btu": 209,
    "Consumption per Capita, Rank": 46,
    "Expenditures per Capita, Dollars": 4307,
    "Expenditures per Capita, Rank": 31
  },
  {
    "State": "ID",
    "Production, U.S. Share": 0.2,
    "Production, Rank": 43,
    "Consumption per Capita, Million Btu": 318,
    "Consumption per Capita, Rank": 24,
    "Expenditures per Capita, Dollars": 4270,
    "Expenditures per Capita, Rank": 32
  },
  {
    "State": "DE",
    "Production, U.S. Share": 0,
    "Production, Rank": 50,
    "Consumption per Capita, Million Btu": 293,
    "Consumption per Capita, Rank": 29,
    "Expenditures per Capita, Dollars": 4112,
    "Expenditures per Capita, Rank": 33
  },
  {
    "State": "MI",
    "Production, U.S. Share": 0.8,
    "Production, Rank": 25,
    "Consumption per Capita, Million Btu": 291,
    "Consumption per Capita, Rank": 31,
    "Expenditures per Capita, Dollars": 4108,
    "Expenditures per Capita, Rank": 34
  },
  {
    "State": "MA",
    "Production, U.S. Share": 0.1,
    "Production, Rank": 45,
    "Consumption per Capita, Million Btu": 213,
    "Consumption per Capita, Rank": 44,
    "Expenditures per Capita, Dollars": 4082,
    "Expenditures per Capita, Rank": 35
  },
  {
    "State": "VA",
    "Production, U.S. Share": 1.1,
    "Production, Rank": 21,
    "Consumption per Capita, Million Btu": 292,
    "Consumption per Capita, Rank": 30,
    "Expenditures per Capita, Dollars": 4080,
    "Expenditures per Capita, Rank": 36
  },
  {
    "State": "IL",
    "Production, U.S. Share": 3.1,
    "Production, Rank": 9,
    "Consumption per Capita, Million Btu": 314,
    "Consumption per Capita, Rank": 26,
    "Expenditures per Capita, Dollars": 4002,
    "Expenditures per Capita, Rank": 37
  },
  {
    "State": "RI",
    "Production, U.S. Share": 0,
    "Production, Rank": 49,
    "Consumption per Capita, Million Btu": 194,
    "Consumption per Capita, Rank": 50,
    "Expenditures per Capita, Dollars": 3985,
    "Expenditures per Capita, Rank": 38
  },
  {
    "State": "GA",
    "Production, U.S. Share": 0.7,
    "Production, Rank": 28,
    "Consumption per Capita, Million Btu": 282,
    "Consumption per Capita, Rank": 33,
    "Expenditures per Capita, Dollars": 3935,
    "Expenditures per Capita, Rank": 39
  },
  {
    "State": "MD",
    "Production, U.S. Share": 0.3,
    "Production, Rank": 38,
    "Consumption per Capita, Million Btu": 234,
    "Consumption per Capita, Rank": 41,
    "Expenditures per Capita, Dollars": 3841,
    "Expenditures per Capita, Rank": 40
  },
  {
    "State": "NC",
    "Production, U.S. Share": 0.7,
    "Production, Rank": 29,
    "Consumption per Capita, Million Btu": 257,
    "Consumption per Capita, Rank": 38,
    "Expenditures per Capita, Dollars": 3751,
    "Expenditures per Capita, Rank": 41
  },
  {
    "State": "OR",
    "Production, U.S. Share": 0.6,
    "Production, Rank": 32,
    "Consumption per Capita, Million Btu": 249,
    "Consumption per Capita, Rank": 39,
    "Expenditures per Capita, Dollars": 3744,
    "Expenditures per Capita, Rank": 42
  },
  {
    "State": "CO",
    "Production, U.S. Share": 3.5,
    "Production, Rank": 7,
    "Consumption per Capita, Million Btu": 276,
    "Consumption per Capita, Rank": 34,
    "Expenditures per Capita, Dollars": 3733,
    "Expenditures per Capita, Rank": 43
  },
  {
    "State": "NV",
    "Production, U.S. Share": 0.1,
    "Production, Rank": 47,
    "Consumption per Capita, Million Btu": 233,
    "Consumption per Capita, Rank": 42,
    "Expenditures per Capita, Dollars": 3704,
    "Expenditures per Capita, Rank": 44
  },
  {
    "State": "WA",
    "Production, U.S. Share": 1.2,
    "Production, Rank": 20,
    "Consumption per Capita, Million Btu": 285,
    "Consumption per Capita, Rank": 32,
    "Expenditures per Capita, Dollars": 3653,
    "Expenditures per Capita, Rank": 45
  },
  {
    "State": "UT",
    "Production, U.S. Share": 1.3,
    "Production, Rank": 17,
    "Consumption per Capita, Million Btu": 271,
    "Consumption per Capita, Rank": 36,
    "Expenditures per Capita, Dollars": 3653,
    "Expenditures per Capita, Rank": 46
  },
  {
    "State": "CA",
    "Production, U.S. Share": 2.8,
    "Production, Rank": 11,
    "Consumption per Capita, Million Btu": 196,
    "Consumption per Capita, Rank": 49,
    "Expenditures per Capita, Dollars": 3550,
    "Expenditures per Capita, Rank": 47
  },
  {
    "State": "DC",
    "Production, U.S. Share": 0,
    "Production, Rank": 51,
    "Consumption per Capita, Million Btu": 271,
    "Consumption per Capita, Rank": 35,
    "Expenditures per Capita, Dollars": 3517,
    "Expenditures per Capita, Rank": 48
  },
  {
    "State": "NY",
    "Production, U.S. Share": 1,
    "Production, Rank": 23,
    "Consumption per Capita, Million Btu": 190,
    "Consumption per Capita, Rank": 51,
    "Expenditures per Capita, Dollars": 3446,
    "Expenditures per Capita, Rank": 49
  },
  {
    "State": "AZ",
    "Production, U.S. Share": 0.7,
    "Production, Rank": 27,
    "Consumption per Capita, Million Btu": 211,
    "Consumption per Capita, Rank": 45,
    "Expenditures per Capita, Dollars": 3360,
    "Expenditures per Capita, Rank": 50
  },
  {
    "State": "FL",
    "Production, U.S. Share": 0.6,
    "Production, Rank": 30,
    "Consumption per Capita, Million Btu": 207,
    "Consumption per Capita, Rank": 47,
    "Expenditures per Capita, Dollars": 3336,
    "Expenditures per Capita, Rank": 51
  }
]


// Matches the name of the state to the data object:
var stateFinder = function(givenState, stateEnergy) {
  for (var i in stateEnergy) {
    if (stateEnergy[i].State === givenState) { return stateEnergy[i]};
    }
};

  $("path").on("click", function() {

    d3.selectAll("svg#one > g").remove(); // clearing prior loading.

    var currentPath = $(this);
    var currentState = $(this).attr("id");
    var currentStateData = stateFinder(currentState, stateEnergy);
    var currentStateConsumption = currentStateData["Consumption per Capita, Million Btu"];
    var currentStateConsumptionRank = currentStateData["Consumption per Capita, Rank"];

    var dataArray = [
      currentStateConsumption,
      currentStateConsumptionRank
    ];

    $(this).css('fill', "hsl(62,100%," + (currentStateData["Consumption per Capita, Rank"]/50*100) +"%)");

    // Displaying current selection data in the paragraphs:

    $("#stateDisplay").text("State: " + currentStateData.State);

    $("#perCapita").text("\n\nAmount: " + currentStateData["Consumption per Capita, Million Btu"] +  " (Millions of BTUs)");

    $("#perCapitaRank").text("Rank: " + currentStateData["Consumption per Capita, Rank"] + " out of 50");

    // setting the data
    var barChartData = dataArray;

    // setting a scale
    var x = d3.scale.linear()
      .domain([0, d3.max(barChartData)])
      .range([0, d3.max(barChartData)]);

    var width = 999;
      barHeight = 60;

    var chart = d3.select(".chart")
      .attr("width", width)
      .attr("height", barHeight * 2);

    var bar = chart.selectAll("g")
      .data(barChartData)
      .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; })

    bar.append("rect")
      .attr("width", x)
      .attr("height", barHeight - 1);

    bar.append("text")
      .attr("x", function(d) { return x(d) - 3; })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d; });

  });


  // // EXAMPLE 4: TUTORIALS FOLLOWING

  // d3.selectAll("p").style("color", function() {
  //   return "hsl(" + Math.random() * 360 + ",100%,50%)";
  // }); // randomly assign colors to p elements!
  //
  // // update
  // var p = d3.select("body")
  //   .selectAll("p")
  //   .data([4, 8, 15, 16, 23, 42])
  //     .text(function(d) { return d; });
  //
  // // enter
  // p.enter().append("p")
  //   .text(function(d) { return "You're at" + d;});
  //
  // // exit
  //
  // p.exit().remove();

  // TUTORIAL via https://bost.ocks.org/mike/bar/


  // // creating the chart (note this depends on CSS ready)
  // var chart = d3.select(".chart");
  // var bar = chart.selectAll("div");
  // var barUpdate = bar.data(barChartData);
  // var barEnter = barUpdate.enter().append("div");
  // barEnter.style("width", function(d) { return x(d) + "px"; });
  // barEnter.text(function(d) { return d; });
  // barEnter.sort();



// example from https://bost.ocks.org/mike/circles/


});
