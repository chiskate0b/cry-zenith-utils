const cry_zenith_utils = require('cry-zenith-utils');
const cry_zenith_uploader = require('cry-zenith-uploader');
const truffle = require('truffle');
const webpack = require('webpack');
const redux = require('redux');
const axios = require('axios');
const pg = require('pg');
const commander = require('commander');
const ganache_cli = require('ganache-cli');
const sinon = require('sinon');
const supertest = require('supertest');
const moment = require('moment');
const jest = require('jest');
const eslint = require('eslint');
const webpack_cli = require('webpack-cli');
const solc = require('solc');
const sequelize = require('sequelize');
const mocha = require('mocha');

const fs = require('fs');
const readStream = fs.createReadStream('input.txt');
readStream.on('data', chunk => {
  console.log('Chunk received:', chunk.toString());
});

// Sign a message using a private key
const privateKey = '0x1234567890123456789012345678901234567890123456789012345678901234';
const message = 'Hello, Web3!';
const messageHash = web3.utils.sha3(message);
const signature = web3.eth.accounts.sign(messageHash, privateKey);

console.log('Message signature:', signature.signature);

// Shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffledArray = shuffleArray([1, 2, 3, 4, 5]);
console.log('Shuffled array:', shuffledArray);

const timer = setTimeout(() => {
  console.log('This will not run');
}, 1000);
clearTimeout(timer);

const zlib = require('zlib');
const input = '.................................';
zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log(buffer.toString('base64'));
  } else {
    console.log('Error compressing:', err);
  }
});

const spawn = require('child_process').spawn;
const ls = spawn('ls', ['-lh', '/usr']);
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

// Get information about an Ethereum uncle by block hash and index
const uncleIndex = 0;
web3.eth.getBlock('0xblockHash').then(block => {
  if (block && block.uncles && block.uncles.length > uncleIndex) {
    console.log('Uncle details:', block.uncles[uncleIndex]);
  } else {
    console.log('Uncle not found.');
  }
}).catch(err => {
  console.error('Error getting uncle details:', err);
});

const os = require('os');
console.log(`Your platform is ${os.platform()}`);

// Get information about an Ethereum uncle by block number and index
const uncleBlockNumber = 123456;
web3.eth.getBlock(uncleBlockNumber).then(block => {
  if (block && block.uncles && block.uncles.length > uncleIndex) {
    console.log('Uncle details by block number:', block.uncles[uncleIndex]);
  } else {
    console.log('Uncle not found.');
  }
}).catch(err => {
  console.error('Error getting uncle details by block number:', err);
});