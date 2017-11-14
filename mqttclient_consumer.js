var mqtt = require ("mqtt");
var config = require ("./config.js");
var shutdown = require ("./watchdog_shutdown.js");
var mqttclient = '';

function start()
{
    try
  {
    //initialize event for a graceful shutdown
    shutdown.Initialize();
    
    //connect to mqtt broker
    initConnectionToBroker();
    
    //initialize publish message for online/offline
    publishMsgOnline();
      
    //initialize subscription to message
    subscribeMsg();
    
  }
  catch (err)
  {
    shutdown.GracefulShutdown(err);
  }
}

function publishMsgOnline()
{
}

function publishMsgOffline()
{
}

function subscribeMsg()
{
}

function consumeMessage()
{
    
}

function initConnectionToBroker()
{
  mqttclient = mqtt.connect('mqtt://localhost:1883');
    
  //need to test if we are connected with mqttclient.connected ?
  mqttclient.on ('connect', OnConnectToBroker);
}

function OnConnectToBroker()
{
  console.log ("mqtt_clientconsumer connected to mqtt broker...");
}

start();
