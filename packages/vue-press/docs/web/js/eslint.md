# 项目引入eslint
前置：安装eslint依赖，vscode安装了eslint拓展 
## 初始化
### 方法1：按照eslint官方是使用npx eslint --init 
然后它会问一系列问题，回到后就会帮你创建一个.eslint.(js/yaml/json)的文件 
实操时我的monorepo仓库回答问题后会创建一个.eslint.cjs文件，自己改成js文件反而不能生效，所以还是建议使用json文件，不会踩坑。
### 方法2：手动敲 
手动创建.eslint.json文件，随便整一点最基础的配置
```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "plugins": [],
    "extends": [],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {}
}
```