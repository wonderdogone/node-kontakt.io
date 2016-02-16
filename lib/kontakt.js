'use strict';

var request = require('request');

//set up the users API key
function KontaktApi(key) {
  this.key = key !== null ? key : null;
  this.beacon_endpoint = 'beacon/'; //temp deprecated resource
  this.device_endpoint = 'device/';
  this.base_url = 'https://api.kontakt.io/';
  var self = this instanceof KontaktApi ? this : Object.create(KontaktApi.prototype);
}

//get requests
KontaktApi.prototype.getBeacon = function(resource, callback) {
  var beaconId, endpoint, managerId, credentials, contact, options, byUnique, proximity,
  major, minor; //TODO clean varaibles

  var p = resource;
  //quick check the settings
  if (resource !== null) {
    options = { uri: p,
      json: true,
      headers: {
        'Accept' : 'application/vnd.com.kontakt+json; version=7',
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

/**
* lists all devices
*/
KontaktApi.prototype.device = function (params, callback) {
  var path = this.base_url + this.device_endpoint;
  if (arguments.length === 1) {
    var cb = params;
    return this.getBeacon(path, cb);
  }
  if ((params !== null) && typeof params === 'object') {
    return this.getBeacon(path, callback);
  } else {
    callback(null, 'Invalid Setting: please provide an object');
  }
};

KontaktApi.prototype.deviceById = function (params, callback) {
  //var endpoint = 'beacon/';
  if ((params !== null) && typeof params === 'object') {

    if (Array.isArray(params.uniqueId) === false) {
      var path = this.base_url + '/' + this.device_endpoint + params.uniqueId;
      return this.getBeacon(path, callback);
    } else {
      callback(null, 'ERROR: only request one beacon at a time');
    }
  } else {
    callback(null, 'Invalid Setting: please provide an object');
  }
};

/**
* /beacon by proximity
*/
KontaktApi.prototype.beaconByProximity = function (params, callback) {
  if ((params !== null) && typeof params === 'object') {
    var path = this.base_url + this.beacon_endpoint + params.proximity +'/' + params.major + '/' + params.minor;
    return this.getBeacon(path, callback);
  } else {
    callback(null, 'Invalid Setting: please provide an object');
  }
};

/**
* /beacon by credentials
*/
KontaktApi.prototype.beaconCredentials = function (params, callback) {
  if ((params !== null) && typeof params === 'object') {

    if (Array.isArray(params.beaconId) === false) {
      var path = this.base_url + '/' + this.beacon_endpoint + params.beaconId + '/credentials';
      return this.getBeacon(path, callback);
    } else {
      callback(null, 'ERROR: only request one beacon at a time');
    }

  } else {
    callback(null, 'Invalid Setting: please provide an object');
  }
};

KontaktApi.prototype.unassigned = function (params, callback) {
  if ((params !== null) && typeof params === 'object') {
    var path = this.base_url + this.beacon_endpoint + 'unassigned/'+ params.managerId;
    return this.getBeacon(path, callback);
  } else {
    callback(null, 'Invalid Setting: please provide an object');
  }
};

//export the module
module.exports = KontaktApi;
