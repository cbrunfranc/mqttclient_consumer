var mqtt = require ("mqtt");
var config = require ("./config.js");

function start()
{
  console.log ("mqtt_clientconsumer is starting...");
  initConnectionToBroker();
}

function initConnectionToBroker()
{
  var mqttbroker = mqtt.connect('mqtt://localhost:1883');
  mqttbroker.on ('connect', connectToBroker);
}

function connectToBroker()
{
  console.log ("mqtt_clientconsumer connected to mqtt broker...");
}

start();
//exports.start = start ;
