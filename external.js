// 在script加载时获取自身
const script2 = document.currentScript;
log(script2?.outerHTML, '1.2 普通script（不带type="module"）, 使用document.currentScript - 外部');
