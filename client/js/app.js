// replace these values with those generated in your TokBox Account
var apiKey = "45998902";
var sessionId = "1_MX40NTk5ODkwMn5-MTUxMDU1OTA5NTEyNH5uOTVNejk0ZmYxSmZCKzJZeHY0am5DcFF-UH4";
var token = "T1==cGFydG5lcl9pZD00NTk5ODkwMiZzaWc9NGRhMGFjMmYzYWYxZjEyMTY3NjAzYjBiNjQ5ZWUwZThiYWFkZGNlOTpzZXNzaW9uX2lkPTFfTVg0ME5UazVPRGt3TW41LU1UVXhNRFUxT1RBNU5URXlOSDV1T1RWTmVqazBabVl4U21aQ0t6SlplSFkwYW01RGNGRi1VSDQmY3JlYXRlX3RpbWU9MTUxMDU1OTEzMSZub25jZT0wLjIyNTI0OTcyNzI4MjI5NTMmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUxMTE2MzkzMCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

// (optional) add server code here
var SERVER_BASE_URL = 'https://videochat-opentok-node.herokuapp.com';
    fetch(SERVER_BASE_URL + '/session').then(function(res) {
      return res.json()
    }).then(function(res) {
      apiKey = res.apiKey;
      sessionId = res.sessionId;
      token = res.token;
      initializeSession();
    }).catch(handleError);

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

session.on('streamCreated', function(event) {
  session.subscribe(event.stream, 'subscriber', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);
});

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}