const today = new Date();

const year = today.getUTCFullYear();

const month = today.getUTCMonth() +1;

const date = today.getUTCDate();

console.log(year + '年' + month + '月' + date + '日');

