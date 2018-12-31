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
const exampleMdMap = new Map();
const exampleUrl = new url.parse('http://example.org/hw.txt');
exampleMdMap.set(0xf, [exampleUrl]);
exampleMdMap.set(0xe, 'text/plain');
const exampleCborMd = cbor.encode(exampleMdMap);
//console.log("CBOR DECODE", cbor.decode(exampleCborMd));
const exampleCborMdMb = multibase.encode('base58btc', exampleCborMd);
console.log('HW Example - Metadata:', exampleCborMdMb.toString());
