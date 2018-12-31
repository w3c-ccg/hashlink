const bs58 = require('bs58');
const cbor = require('cbor');
const crypto = require('crypto');
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
let exampleUrl = url.parse('http://example.org/hw.txt');
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
