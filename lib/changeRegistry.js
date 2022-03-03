const { exec } = require('child_process');
const inquirer = require('inquirer');

module.exports = async function(f) {
  const answers = await inquirer.prompt([
    {
      name: 'changeRegistry',
      message: '是否切换cnpm至新域名:https://registry.npmmirror.com',
      type: 'confirm',
    },
  ]);
  if (answers.changeRegistry) {
    exec(`npm config set registry https://registry.npmmirror.com`);
    exec(`cnpm config set registry https://registry.npmmirror.com`);
    return;
  }
  if (f) {
    console.error(`\x1B[1;31m* 请更新淘宝镜像源 安装依赖， 老镜像源将于 2022 年 05 月 31 日零时起停止服务。\x1B[0;0m`);
    process.exit(1);
  }
  console.warn(`\x1B[1;31m* 建议更新淘宝镜像源 安装依赖。 \x1B[0;0m`);
}
