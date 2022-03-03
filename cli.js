#!/usr/bin/env node
const yParser = require('yargs-parser');
const tnpmCheck = require('./lib/taobaoOrgCheck');
const changeRegistry = require('./lib/changeRegistry');
const args = yParser(process.argv.slice(2));

(async () => {
  if (!tnpmCheck()) {
    // 询问自动切换
    await changeRegistry(args.f);
  }
})();
