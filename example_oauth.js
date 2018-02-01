var PMIO = require('PMIO');
var config = require('./config.js');
var request = require('superagent');

var defaultClient = PMIO.ApiClient.instance;
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
defaultClient.basePath = config.api_url;
PasswordGrant.accessToken = config.access_token;
var apiInstance = new PMIO.Client();

/**
 * get oauth2 credentials 
 * @param  object   data
 */
function requestCredentials(data, cb) {
  request
    .post(config.oauth_url)
    .send(data)
    .end((err, res) => {
      cb(err, res);
    });
}

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    var userData = data.data[1];
    console.log(userData);
    apiInstance.findOauthClientById(userData.id, userData.attributes.clients[0], function(err, dataOauth, responce) {
      var userArgs = {
        grant_type: 'password',
        client_id: config.client_id, //dataOauth.data.id,
        client_secret: config.client_secret, //dataOauth.data.attributes.secret,
        username: config.username, //userData.attributes.username,
        password: config.password//userData.attributes.password
      }
      requestCredentials(userArgs, function(err, results) {
        //if(err) console.log(err);
        console.log(results.body);
      })
    });
  }
};


var opts = { 
  'page': 1, 
  'perPage': 15
};
apiInstance.findUsers(opts, callback);
 