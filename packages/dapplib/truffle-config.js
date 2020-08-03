require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile purpose harvest cart furnace squirrel'; 
let testAccounts = [
"0xc73fb112043e468352e9c95cc014011ad2ef18cc5ee9dd7a6f048b08cc348451",
"0x9cba107250afe85cafa42c43b55461567343afaeae5571543e38ab2e60d233cf",
"0x7033d1dddc9f9bc6aab639b8ab925922e776a2e03a3e6eef8a7a34d84934e29f",
"0xc4e22fb7b6ccaf91284403ab2f7c46c7c41a6f2a4de2bcce87eb9c0088855450",
"0x294ec5e64d408d1402bb1e9f4466368feb74d96a0d3e385dc8761c3d9b09d3a9",
"0x32c117e28f8e2c153f4738e21e0a9346afd88e140b98a2a92b60ba3e206897cc",
"0xc024cad608653011458f7fa2f7aa1fa396f098559642b61aa3c31a6bb31adffc",
"0x42552d5dedee857d0b8fd9f7a3ce1696b6d50d560c86b781240d992c4060446d",
"0x101a214b3b927474d8c6dbf079de3c1508adf2c2f50f02dbf8c3b811b86a060a",
"0x407f896164189b4e76bc6e19889dbe5bfa76e04df5deb3489204f2ccc7b803a2"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
