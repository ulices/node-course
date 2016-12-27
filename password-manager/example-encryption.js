var crypto = require('crypto-js');

//var secretMessage = 'I hid the chips under the couch.';
//var secretKey = '123abc';

//var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);

//console.log('Encrypted Message ' + encryptedMessage);


//var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
//var decryptedMessage = bytes.toString(crypto.enc.Utf8);

//console.log('Decrypted Message: ' + decryptedMessage);


var secretMessage = {
  name: 'Ulices',
  secretName: 'Dev'
};
var secretKey = '123qwe';

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);

console.log('Encrypted Message ' + encryptedMessage);

var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log('Decrypted Message: ' + JSON.stringify(decryptedMessage));
console.log(decryptedMessage.name);


