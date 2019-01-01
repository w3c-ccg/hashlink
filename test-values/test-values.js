const blake = require('blakejs');
const bs58 = require('bs58');
const cbor = require('cbor');
const crypto = require('crypto');
const https = require('https');
const multihash = require('multihashes');
const multibase = require('multibase');
const url = require('url');

const exampleDocument = 'Hello World!';

// generate base58btc encoded SHA-2, 256 bit, 32 byte output value
const exampleHash =
  crypto.createHash('sha256').update(exampleDocument, 'utf8').digest();
//console.log('EXDH', exampleHash);
const exampleMh = multihash.encode(exampleHash, 'sha2-256');
//console.log('EXMH', exampleMh);
const exampleMb = multibase.encode('base58btc', exampleMh);
console.log('HW Example - SHA-2 Multibase Multihash:', exampleMb.toString());

// generate CBOR metadata
let exampleMdMap = new Map();
const exampleUrl = url.parse('http://example.org/hw.txt');
exampleMdMap.set(0xf, [exampleUrl]);
exampleMdMap.set(0xe, 'text/plain');
let exampleCborMd = cbor.encode(exampleMdMap);
//console.log("CBOR DECODE", cbor.decode(exampleCborMd));
let exampleCborMdMb = multibase.encode('base58btc', exampleCborMd);
console.log('HW Example - Metadata:', exampleCborMdMb.toString());

// generate CBOR metadata for tv-multisource
exampleMdMap = new Map();
exampleMdMap.set(0xf, [
  url.parse('http://example.org/hw.txt'),
  url.parse('ipfs:/ipfs/QmXfrS3pHerg44zzK6QKQj6JDk8H6cMtQS7pdXbohwNQfK/hello'),
  url.parse('http://c4m3g2upq6pkufl4.onion/hworld.txt')
]);
exampleCborMd = cbor.encode(exampleMdMap);
//console.log("CBOR DECODE", cbor.decode(exampleCborMd));
exampleCborMdMb = multibase.encode('base58btc', exampleCborMd);
console.log('tv-multisource Example - Metadata:', exampleCborMdMb.toString());

/* generate DID v0.11 hash
https.get('https://w3c-ccg.github.io/did-spec/did-v0.11.jsonld', (response) => {
  let didContext = '';
  response.on('data', (chunk) => {didContext += chunk;});
  response.on('end', () => {
    const blake2b8byte = new Buffer(blake.blake2b(didContext, null, 8));
    const blake2b8byteMh = multihash.encode(blake2b8byte, 'blake2b-64');
    const blake2b8byteMb = multibase.encode('base58btc', blake2b8byteMh);
    const blake2b8byteMap = new Map();
    blake2b8byteMap.set(0xf, [url.parse('https://w3id.org/did/v0.11')]);

    console.log("blake2b8byte", blake2b8byte);
    console.log("blake2b8byteMh", blake2b8byteMh);
    console.log("blake2b8byteMb", blake2b8byteMb.toString());
    console.log("blake2b8byte metadata",
      multibase.encode('base58btc', cbor.encode(blake2b8byteMap)).toString());
  });
}).on("error", (err) => {console.log("Error: " + err.message);});
*/
