### kontakt-node
A node module using the Kontakt.io REST API. Allows you to programmatically access all your devices, venues, actions etc in the kontakt.io Cloud.
aimed at Node.js and IO.js developers who want to manage all their kontakt.io cloud interactions using standalone or web applications.

Currently this module only supports GET requests in releaction to Beacon resource. Collaborators feel free to help as I add other request typs and resources.

##Install
`npm install kontakt-node`


You must have a developer account and access key from Kontakt.io. Go here and get yours http://panel.kontakt.io/
Once you have your access key , include and initialize your module using your "key"
Example:
```
var KontaktApi = require('kontakt-node');
var kontaktApi = new KontaktApi('<YOURAPIKEYHERE>');

```

Current Methods supportd on Beacons are
1- GET beaconById
```
 kontaktApi.beaconById({beaconId: '<YOURBEACONID>'}, function (err, res) {
           console.log(res);
   });
```
2- GET beaconByManager
```
kontaktApi.beaconByManager({managerId: '<YOURMANAGERID>'},
  function (err, res) {
            console.log(res);
    });
```
3- GET beaconByProximity
```
kontaktApi.beaconByProximity({proximity: '<YOURPROXIMITY>', major: '<YOURMAJOR>', minor: '<YOURMINOR>'},
    function (err, res) {
              console.log(res);
      });
```
4- GET beaconCredentials
```
kontaktApi.beaconCredentials({beaconId: '<YOURBEACONID>'},
function (err, res) {
  console.log(res);
});
```

TODO: UPDATE beacons and Assign Beacon methods



