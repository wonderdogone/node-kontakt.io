'use strict'
var request = require('request');

//set up the users API key
function KontaktApi(key) {
  this.key = key !== null ? key : null;
  this.beacon_endpoint = 'beacon/';
  var self = this instanceof KontaktApi ? this : Object.create(KontaktApi.prototype);
}

var base_url = 'http://api.kontakt.io/';

//get requests
KontaktApi.prototype.getBeacon = function(resource, callback) {
  var beaconId, endpoint, managerId, credentials, contact, options, byUnique, proximity,
  major, minor; //TODO clean varaibles

  var p = resource;
  //quick check the settings
  if (resource !== null) {
    //setup options to feed request module
    options = { uri: p,
      json: true,
      headers: {
        'Accept' : 'application/vnd.com.kontakt+json; version=6',
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Api-Key': this.key
      }
    };

  } else {
    callback(null, 'Invalid Setting');
  }

  //make the request
  contact = request.get(options, function (error, response, object) {
    if (error) { return callback(error); }

    if (response.statusCode != 200 ) {
      return callback(response.statusCode);
    }
    callback(null, object);
  });

};

KontaktApi.prototype.beaconById = function (params, callback) {
  //var endpoint = 'beacon/';
  if ((params !== null) && typeof params === 'object') {

    if (Array.isArray(params.beaconId) === false) {
      var path = base_url + '/' + this.beacon_endpoint + params.beaconId;
      return this.getBeacon(path, callback);
    } else {
      callback(null, 'ERROR: only request one beacon at a time');
    }

  } else {
    callback(null, 'Invalid Setting: provide and object');
  }
};

KontaktApi.prototype.beaconByManager = function (params, callback) {
  if ((params !== null) && typeof params === 'object') {
    var path = base_url + this.beacon_endpoint + '?managerId=' + params.managerId;
    return this.getBeacon(path, callback);
  } else {
    callback(null, 'Invalid Setting: provide and object');
  }
};

KontaktApi.prototype.beaconByProximity = function (params, callback) {
  if ((params !== null) && typeof params === 'object') {
    var path = base_url + this.beacon_endpoint + params.proximity +'/' + params.major + '/' + params.minor;
    return this.getBeacon(path, callback);
  } else {
    callback(null, 'Invalid Setting: provide and object');
  }
};

KontaktApi.prototype.beaconCredentials = function (params, callback) {
  if ((params !== null) && typeof params === 'object') {

    if (Array.isArray(params.beaconId) === false) {
      var path = base_url + '/' + this.beacon_endpoint + params.beaconId + '/credentials';
      return this.getBeacon(path, callback);
    } else {
      callback(null, 'ERROR: only request one beacon at a time');
    }

  } else {
    callback(null, 'Invalid Setting: provide and object');
  }
};

//export the module
module.exports = KontaktApi;
