### node-kontakt.io
A node module using the Kontakt.io REST API. Allows you to programmatically access all your devices, venues, actions etc in the kontakt.io Cloud.
aimed at Node.js and IO.js developers who want to manage all their kontakt.io cloud interactions using standalone or web applications.

currently this module only supports GET requests in releaction to Beacon resource. Collaborators feel free to help as I ass onther request typs and resources.

##Install
`npm install node-kontakt.io`


You must have a developer account and access key from Kontakt.io. Go here and get yours http://panel.kontakt.io/
Once you have your access key , inculde and initialize your module using your "key"
Example:
var KontaktApi = require('node-kontakt.io');
 var kontaktApi = new KontaktApi('<YOURAPIKEYHERE>');
 
 kontaktApi.beaconByProximity({proximity: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e', major: '39304', minor: '61171'},
    function (err, res) {
              console.log(res);
      });




