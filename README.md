# javascript-get-self-script-tag-demo

这个项目演示了在JavaScript中如何获取当前执行的script标签元素。

## 测试结果

### 1. 普通script（不带type="module"）

| 编号 | 场景 | 方法 | 结果 | 说明 |
|------|------|------|------|------|
| 1.1 | 内联script | document.currentScript | ✓ 成功 | 可以获取到当前script标签 |
| 1.2 | 外部script | document.currentScript | ✓ 成功 | 可以获取到当前script标签 |
| 1.3 | 内联script | name属性遍历 | ✓ 成功 | 可以通过name属性找到script标签 |

### 2. ES模块（带type="module"）

| 编号 | 场景 | 方法 | 结果 | 说明 |
|------|------|------|------|------|
| 2.1 | 内联模块 | document.currentScript | ✗ 失败 | 返回null |
| 2.2 | 外部模块 | document.currentScript | ✗ 失败 | 返回null |
| 2.3 | 内联模块 | name属性遍历 | ✓ 成功 | 可以通过name属性找到script标签 |
| 2.4 | 内联模块 | import.meta.url | ✗ 失败 | URL是页面URL，无法匹配 |
| 2.5 | 外部模块 | import.meta.url | ✓ 成功 | 可以通过URL匹配找到script标签 |

## 结论

1. document.currentScript
   - 在普通script中可用（内联和外部都可以）
   - 在ES模块中不可用（返回null）

2. name属性遍历
   - 在所有场景下都可用
   - 需要给script添加name属性

3. import.meta.url
   - 只在ES模块中可用
   - 对于内联模块，URL是页面URL，无法匹配
   - 对于外部模块，可以通过URL匹配找到script标签（推荐使用）

## 使用方法

```
npm install
npm start
```

将自动打开页面