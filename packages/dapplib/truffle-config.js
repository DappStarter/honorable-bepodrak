require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net proof grace lock suit tortoise'; 
let testAccounts = [
"0x9959f24eab8c342ca9fcd1f763cf9c1f971fd04dbdca1e561d91aa5096a1b3f5",
"0xcb78d1341fb2f8f2e15e3fdafbd08d890d7d3520ae7c91f5073838ca0c3807e4",
"0xa2c81801e9e937614c5346ab72958fdc87455e9800fa2178beca7f48df1d0f50",
"0x07ae1929a822f5b408cd9fa4340015dbf5b7b968cc94551e1f4d836411e523f1",
"0x91a352542292466fd075bb0b4dcbd5c5c85a7a61126bc1e25b12463a0eabf1df",
"0xca81d14a46cd885cb02a61399abe7afa422f6e1ba2bfae98d1526eeb325b7960",
"0xd6f51115c5af343d99691befb5997d478f0d85d90cd87ad2e70b809d6ea80563",
"0xf63708b77285ce256a20aec60afc9dd1ebc093a45282d07e682446482fee2281",
"0x4d8a5a4d910336db772bc24981cb9a44921aacfcc02f512213af81c02214f387",
"0x1ec2c4a3c7ffd8367356af111a64fbc11ca0ef929644886936b00f72da3033b2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
