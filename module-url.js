// ES模块文件
const moduleUrl = import.meta.url;
const scripts = Array.from(document.getElementsByTagName('script'));
const moduleScript = scripts.find(
    script => script.src === moduleUrl
);
log(moduleScript?.outerHTML, '2.5 ES模块（带type="module"）, 外部模块使用import.meta.url查找'); 