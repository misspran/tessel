'use strict';

var tessel = require('tessel');
var climatelib = require('climate-si7020');

var climate = climatelib.use(tessel.port['A']);

climate.on('ready', function () {
  console.log('Connected to climate module');

  // Loop forever
  setImmediate(function loop () {
    climate.readTemperature('f', function (err, temp) {
      climate.readHumidity(function (err, humid) {
     // console.log('Degrees:', temp.toFixed(4) + 'F', 'Humidity:', humid.toFixed(4) + '%RH');
     	console.log(temp)

     	if(temp > 120){
     		console.log('coffee is ready!')

     	}else if (temp >40 && temp <72){
     		console.log('this is cold water')

     	}else{
     		console.log('this shit room temperature')
     	}
      setTimeout(loop, 1000);
      });
    });
  });
});

climate.on('error', function(err) {
  console.log('error connecting module', err);
});

module.exports = {climate}