var mqtt = require ("mqtt");
var config = require ("./config.js");
var shutdown = require ("./watchdog_shutdown.js");

function start()
{
    try
  {
    //initialize event for a graceful shutdown
    shutdown.Initialize();
    
    //connect to mqtt broker
    initConnectionToBroker();
    
    //initialize publish message for online/offline
    initPublishMsgOnLineOffLine();
    
  }
  catch (err)
  {
    shutdown.GracefulShutdown(err);
  }
}

function initPublishMsgOnLineOffLine()
{
  
}

function initConnectionToBroker()
{
  var mqttbroker = mqtt.connect('mqtt://localhost:1883');
  mqttbroker.on ('connect', OnConnectToBroker);
}

function OnConnectToBroker()
{
  console.log ("mqtt_clientconsumer connected to mqtt broker...");
}

start();
