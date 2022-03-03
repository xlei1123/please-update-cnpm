module.exports = function() {
  if (
    /taobao\.org|cnpmjs\.org/.test(process.env.npm_config_registry)
  ) {
    console.error(`\x1B[1;31m${"*".repeat(40)}\x1B[0;0m`);
    console.warn(`\x1B[1;31m* 老http://npm.taobao.org 和 http://registry.npm.taobao.org 域名将于 2022 年 05 月 31 日零时起停止服务。\x1B[0;0m`);
    console.error(`\x1B[1;31m${"*".repeat(40)}\x1B[0;0m`);
    console.error(``);
    return false;
  }
  return true;
}

