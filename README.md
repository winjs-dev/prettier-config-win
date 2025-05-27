# prettier-config-win

> 团队内部 prettier 配置，支持 CommonJS 和 ESM

## Install

```bash
npm install @winner-fed/prettier-config-win --save-dev
# 或
yarn add @winner-fed/prettier-config-win --dev
# 或
pnpm add @winner-fed/prettier-config-win -D
```

## Usage

### 方式一：在 `package.json` 中配置

```json
{
  "prettier": "@winner-fed/prettier-config-win"
}
```

### 方式二：在 `.prettierrc` 中配置

```json
"@winner-fed/prettier-config-win"
```

### 方式三：直接使用 JSON 配置（向前兼容）

```json
"@winner-fed/prettier-config-win/index.json"
```

### 方式四：在 `prettier.config.js` 中配置（ESM）

```javascript
export { default } from '@winner-fed/prettier-config-win';
```

### 方式五：在 `prettier.config.cjs` 中配置（CommonJS）

```javascript
module.exports = require('@winner-fed/prettier-config-win');
```

### 方式六：扩展配置

```javascript
// prettier.config.js (ESM)
import baseConfig from '@winner-fed/prettier-config-win';

export default {
  ...baseConfig,
  // 你的自定义配置
  printWidth: 100,
};
```

## 兼容性说明

本库同时支持多种模块格式，确保向前兼容：

- **JSON 格式**：保留原有的 `index.json` 文件，现有项目无需修改
- **ESM 格式**：支持现代 ES 模块语法，适用于新项目
- **CommonJS 格式**：支持传统的 Node.js 模块系统

### 迁移建议

如果你正在使用旧版本，可以选择以下迁移路径：

1. **保持现状**：继续使用 JSON 配置，无需任何修改
2. **渐进式迁移**：新项目使用 ESM/CommonJS 格式，旧项目保持不变
3. **完全迁移**：将所有项目迁移到 JavaScript 配置格式，获得更好的扩展性

```javascript
// prettier.config.cjs (CommonJS)
const baseConfig = require('@winner-fed/prettier-config-win');

module.exports = {
  ...baseConfig,
  // 你的自定义配置
  printWidth: 100,
};
```
