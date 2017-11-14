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
    connectToMQTTBroker();
    
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

function connectToMQTTBroker()
{
   client = new mqtt.client();
    
   mqttclient = mqtt.connect('mqtt://localhost:1883');
    
  //create the client - if it is does not exist 
  //to do  - initialize all client - at the start of the application
  //pas dans cette fonction
  //attention à la gestion du reconnect + clean = true or false
    
  //Test is the mqtt broker is alive
    
  //Test is mqtt client is already connected
    
  //Connect to mqttclient
  mqttclient = mqtt.connect('mqtt://localhost:1883');
    
  //intercep 'error' to handle connection failed
  //intercep 'close' to handle disconnection
  //mqttclient.on ('connect', OnConnectToBroker);
}

function OnConnectToBroker()
{
  console.log ("mqtt_clientconsumer connected to mqtt broker...");
}

start();
