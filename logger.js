// 创建输出元素
const output = document.createElement('div');
output.id = 'output';
document.body.appendChild(output);

// 定义并导出log函数
export function log(title, script) {
    const div = document.createElement('div');
    div.className = 'script-info';

    const titleElem = document.createElement('h3');
    titleElem.textContent = title;
    div.appendChild(titleElem);

    if (script) {
        const properties = [
            ['Name', script.getAttribute('name')],
            ['Type', script.type || '(默认)'],
            ['Src', script.src || '(内联代码)'],
            ['Module', script.type === 'module' ? '是' : '否']
        ];

        // 如果是ES模块，显示script的src作为URL
        if (script.type === 'module' && script.src) {
            properties.push(['URL', script.src]);
        }

        properties.forEach(([name, value]) => {
            const p = document.createElement('div');
            p.className = 'property';
            p.textContent = `${name}: ${value}`;
            div.appendChild(p);
        });
    } else {
        const p = document.createElement('div');
        p.className = 'property';
        p.textContent = '无法获取script标签';
        div.appendChild(p);
    }

    output.appendChild(div);
}

// 为非模块脚本提供全局访问
window.log = log;

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 重新定位output元素到正确的位置
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.after(output);
    }
}); 