// this file ins't transpiled, so must use CommonJS and ES5

// Register babel to  transpile before our tests run.
// 告訴Mocha，在Mocha運行這些測試之前，第一個babel應該傳輸我們的測試。
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
/*
禁用所有Mocha不理解的特定於webpack的特性，CSS擴展是因為我們在索引中記住了. JS，
我們需要索引 .css，這是webpack理解的功能，但Mocha不支持，所以我們只是告訴Mocha，如果它看到了這一點，就把它當作一個空的函數來對待。
*/
require.extensions['.css'] = function(){};