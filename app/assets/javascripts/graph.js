$( document ).ready(function() {

  //
  // d3.geo.tile=function(){function t(){var t=Math.max(Math.log(n)/Math.LN2-8,0),h=Math.round(t+e),o=Math.pow(2,t-h+8),u=[(r[0]-n/2)/o,(r[1]-n/2)/o],l=[],c=d3.range(Math.max(0,Math.floor(-u[0])),Math.max(0,Math.ceil(a[0]/o-u[0]))),M=d3.range(Math.max(0,Math.floor(-u[1])),Math.max(0,Math.ceil(a[1]/o-u[1])));return M.forEach(function(t){c.forEach(function(a){l.push([a,t,h])})}),l.translate=u,l.scale=o,l}var a=[960,500],n=256,r=[a[0]/2,a[1]/2],e=0;return t.size=function(n){return arguments.length?(a=n,t):a},t.scale=function(a){return arguments.length?(n=a,t):n},t.translate=function(a){return arguments.length?(r=a,t):r},t.zoomDelta=function(a){return arguments.length?(e=+a,t):e},t};
  //
  //
  // var width = Math.max(960, window.innerWidth),
  //     height = Math.max(500, window.innerHeight),
  //     prefix = prefixMatch(["webkit", "ms", "Moz", "O"]);
  //
  // var tile = d3.geo.tile()
  //     .size([width, height]);
  //
  // var projection = d3.geo.mercator();
  //
  // var zoom = d3.behavior.zoom()
  //     .scale(1 << 12)
  //     .scaleExtent([1 << 9, 1 << 23])
  //     .translate([width / 2, height / 2])
  //     .on("zoom", zoomed);
  //
  // var map = d3.select("body").append("div")
  //     .attr("class", "map")
  //     .style("width", width + "px")
  //     .style("height", height + "px")
  //     .call(zoom)
  //     .on("mousemove", mousemoved);
  //
  // var layer = map.append("div")
  //     .attr("class", "layer");
  //
  // var info = map.append("div")
  //     .attr("class", "info");
  //
  // zoomed();
  //
  // function zoomed() {
  //   var tiles = tile
  //       .scale(zoom.scale())
  //       .translate(zoom.translate())
  //       ();
  //
  //   projection
  //       .scale(zoom.scale() / 2 / Math.PI)
  //       .translate(zoom.translate());
  //
  //   var image = layer
  //       .style(prefix + "transform", matrix3d(tiles.scale, tiles.translate))
  //     .selectAll(".tile")
  //       .data(tiles, function(d) { return d; });
  //
  //   image.exit()
  //       .remove();
  //
  //   image.enter().append("img")
  //       .attr("class", "tile")
  //       .attr("src", function(d) { return "http://" + ["a", "b", "c"][Math.random() * 3 | 0] + ".tile.openstreetmap.org/" + d[2] + "/" + d[0] + "/" + d[1] + ".png"; })
  //       .style("left", function(d) { return (d[0] << 8) + "px"; })
  //       .style("top", function(d) { return (d[1] << 8) + "px"; });
  // }
  //
  // function mousemoved() {
  //   info.text(formatLocation(projection.invert(d3.mouse(this)), zoom.scale()));
  // }
  //
  // function matrix3d(scale, translate) {
  //   var k = scale / 256, r = scale % 1 ? Number : Math.round;
  //   return "matrix3d(" + [k, 0, 0, 0, 0, k, 0, 0, 0, 0, k, 0, r(translate[0] * scale), r(translate[1] * scale), 0, 1 ] + ")";
  // }
  //
  // function prefixMatch(p) {
  //   var i = -1, n = p.length, s = document.body.style;
  //   while (++i < n) if (p[i] + "Transform" in s) return "-" + p[i].toLowerCase() + "-";
  //   return "";
  // }
  //
  // function formatLocation(p, k) {
  //   var format = d3.format("." + Math.floor(Math.log(k) / 2 - 2) + "f");
  //   return (p[1] < 0 ? format(-p[1]) + "°S" : format(p[1]) + "°N") + " "
  //        + (p[0] < 0 ? format(-p[0]) + "°W" : format(p[0]) + "°E");
  // }

  // // EXAMPLE 2: A TICKING CLOCK

  // var width = 960,
  //     height = 800,
  //     radius = Math.min(width, height) / 1.9,
  //     spacing = .09;
  //
  // var formatSecond = d3.time.format("%-S seconds"),
  //     formatMinute = d3.time.format("%-M minutes"),
  //     formatHour = d3.time.format("%-H hours"),
  //     formatDay = d3.time.format("%A"),
  //     formatDate = function(d) { d = d.getDate(); switch (10 <= d && d <= 19 ? 10 : d % 10) { case 1: d += "st"; break; case 2: d += "nd"; break; case 3: d += "rd"; break; default: d += "th"; break; } return d; },
  //     formatMonth = d3.time.format("%B");
  //
  // var color = d3.scale.linear()
  //     .range(["hsl(-180,60%,50%)", "hsl(180,60%,50%)"])
  //     .interpolate(function(a, b) { var i = d3.interpolateString(a, b); return function(t) { return d3.hsl(i(t)); }; });
  //
  // var arcBody = d3.svg.arc()
  //     .startAngle(0)
  //     .endAngle(function(d) { return d.value * 2 * Math.PI; })
  //     .innerRadius(function(d) { return d.index * radius; })
  //     .outerRadius(function(d) { return (d.index + spacing) * radius; })
  //     .cornerRadius(6);
  //
  // var arcCenter = d3.svg.arc()
  //     .startAngle(0)
  //     .endAngle(function(d) { return d.value * 2 * Math.PI; })
  //     .innerRadius(function(d) { return (d.index + spacing / 2) * radius; })
  //     .outerRadius(function(d) { return (d.index + spacing / 2) * radius; });
  //
  // var svg = d3.select("body").append("svg")
  //     .attr("width", width)
  //     .attr("height", height)
  //   .append("g")
  //     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  //
  // var field = svg.selectAll("g")
  //     .data(fields)
  //   .enter().append("g");
  //
  // field.append("path")
  //     .attr("class", "arc-body");
  //
  // field.append("path")
  //     .attr("id", function(d, i) { return "arc-center-" + i; })
  //     .attr("class", "arc-center");
  //
  // field.append("text")
  //     .attr("dy", ".35em")
  //     .attr("dx", ".75em")
  //     .style("text-anchor", "start")
  //   .append("textPath")
  //     .attr("startOffset", "50%")
  //     .attr("class", "arc-text")
  //     .attr("xlink:href", function(d, i) { return "#arc-center-" + i; });
  //
  // tick();
  //
  // d3.select(self.frameElement).style("height", height + "px");
  //
  // function tick() {
  //   if (!document.hidden) field
  //       .each(function(d) { this._value = d.value; })
  //       .data(fields)
  //       .each(function(d) { d.previousValue = this._value; })
  //     .transition()
  //       .ease("elastic")
  //       .duration(500)
  //       .each(fieldTransition);
  //
  //   setTimeout(tick, 1000 - Date.now() % 1000);
  // }
  //
  // function fieldTransition() {
  //   var field = d3.select(this).transition();
  //
  //   field.select(".arc-body")
  //       .attrTween("d", arcTween(arcBody))
  //       .style("fill", function(d) { return color(d.value); });
  //
  //   field.select(".arc-center")
  //       .attrTween("d", arcTween(arcCenter));
  //
  //   field.select(".arc-text")
  //       .text(function(d) { return d.text; });
  // }
  //
  // function arcTween(arc) {
  //   return function(d) {
  //     var i = d3.interpolateNumber(d.previousValue, d.value);
  //     return function(t) {
  //       d.value = i(t);
  //       return arc(d);
  //     };
  //   };
  // }
  //
  // function fields() {
  //   var now = new Date;
  //   return [
  //     {index: .7, text: formatSecond(now), value: now.getSeconds() / 60},
  //     {index: .6, text: formatMinute(now), value: now.getMinutes() / 60},
  //     {index: .5, text: formatHour(now),   value: now.getHours() / 24},
  //     {index: .3, text: formatDay(now),    value: now.getDay() / 7},
  //     {index: .2, text: formatDate(now),   value: (now.getDate() - 1) / (32 - new Date(now.getYear(), now.getMonth(), 32).getDate())},
  //     {index: .1, text: formatMonth(now),  value: now.getMonth() / 12}
  //   ];
  // }

  // // EXAMPLE 3: A CHLOROPLETH map

  // var map = d3.geomap.choropleth()
  //     .geofile('/d3-geomap/topojson/countries/USA.json')
  //     .projection(d3.geo.albersUsa)
  //     .column('2012')
  //     .unitId('fips')
  //     .scale(1000)
  //     .legend(true);
  //
  // d3.csv('/data/venture-capital.csv', function(error, data) {
  //     d3.select('#map')
  //         .datum(data)
  //         .call(map.draw, map);
  // });

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

  // setting the data
  var barChartData = [ 4, 8, 15, 16, 23, 42, 5, 8 ];

  // setting a scale
  var x = d3.scale.linear()
    .domain([0, d3.max(barChartData)])
    .range([0, 420]);

  // creating the chart (note this depends on CSS ready)
  var chart = d3.select(".chart");
  var bar = chart.selectAll("div");
  var barUpdate = bar.data(barChartData);
  var barEnter = barUpdate.enter().append("div");
  barEnter.style("width", function(d) { return x(d) + "px"; });
  barEnter.text(function(d) { return d; });
  barEnter.sort();

});
