### node-kontakt.io
A node module using the Kontakt.io REST API. Allows you to programmatically access all your devices, venues, actions etc in the kontakt.io Cloud.
aimed at Node.js and IO.js developers who want to manage all their kontakt.io cloud interactions using standalone or web applications.

Currently this module only supports GET requests in releaction to Beacon resource. Collaborators feel free to help as I add other request typs and resources.

##Install
`npm install node-kontakt.io`


You must have a developer account and access key from Kontakt.io. Go here and get yours http://panel.kontakt.io/
Once you have your access key , inculde and initialize your module using your "key"
Example:
```
var KontaktApi = require('node-kontakt.io');
var kontaktApi = new KontaktApi('<YOURAPIKEYHERE>');
 //GET by beacon ID
 kontaktApi.beaconByProximity({proximity: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e', major: '39304', minor: '61171'},
    function (err, res) {
              console.log(res);
      });
```

Current Methods supportd on Beacons are
1- GET beaconById
```
kontaktApi.beaconByProximity({proximity: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e', major: '39304', minor: '61171'},
    function (err, res) {
              console.log(res);
      });
```
2- GET beaconByManager
```
kontaktApi.beaconByManager({managerId: '6fd36eb4-0f60-4f5b-8c43-1dcc0cffa03f'},
  function (err, res) {
            console.log(res);
    });
```
3- GET beaconByProximity
```
kontaktApi.beaconByProximity({proximity: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e', major: '39304', minor: '61171'},
    function (err, res) {
              console.log(res);
      });
```
4- GET beaconCredentials
```
kontaktApi.beaconCredentials({beaconId: 'Umvb'},
function (err, res) {
  console.log(res);
});
```

TODO: UPDATE beacons and Assign Beacon methods



