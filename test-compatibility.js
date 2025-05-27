/**
 * 兼容性测试脚本
 * 验证所有模块格式都能正常工作
 */

import fs from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

console.log('🧪 开始兼容性测试...\n');

// 测试 1: JSON 配置
try {
  const jsonConfig = JSON.parse(fs.readFileSync('./index.json', 'utf8'));
  console.log('✅ JSON 配置加载成功');
  console.log(`   - semi: ${jsonConfig.semi}`);
  console.log(`   - singleQuote: ${jsonConfig.singleQuote}`);
  console.log(`   - printWidth: ${jsonConfig.printWidth}\n`);
} catch (error) {
  console.log('❌ JSON 配置加载失败:', error.message);
}

// 测试 2: ESM 配置
try {
  const esmConfig = await import('./index.js');
  console.log('✅ ESM 配置加载成功');
  console.log(`   - semi: ${esmConfig.default.semi}`);
  console.log(`   - singleQuote: ${esmConfig.default.singleQuote}`);
  console.log(`   - printWidth: ${esmConfig.default.printWidth}\n`);
} catch (error) {
  console.log('❌ ESM 配置加载失败:', error.message);
}

// 测试 3: CommonJS 配置
try {
  const cjsConfig = require('./index.cjs');
  console.log('✅ CommonJS 配置加载成功');
  console.log(`   - semi: ${cjsConfig.semi}`);
  console.log(`   - singleQuote: ${cjsConfig.singleQuote}`);
  console.log(`   - printWidth: ${cjsConfig.printWidth}\n`);
} catch (error) {
  console.log('❌ CommonJS 配置加载失败:', error.message);
}

// 测试 4: 配置一致性检查
try {
  const jsonConfig = JSON.parse(fs.readFileSync('./index.json', 'utf8'));
  const esmConfig = (await import('./index.js')).default;
  const cjsConfig = require('./index.cjs');
  
  const isConsistent = 
    jsonConfig.semi === esmConfig.semi && 
    jsonConfig.semi === cjsConfig.semi &&
    jsonConfig.singleQuote === esmConfig.singleQuote && 
    jsonConfig.singleQuote === cjsConfig.singleQuote &&
    jsonConfig.printWidth === esmConfig.printWidth && 
    jsonConfig.printWidth === cjsConfig.printWidth;
    
  if (isConsistent) {
    console.log('✅ 所有配置格式保持一致');
  } else {
    console.log('❌ 配置格式之间存在差异');
  }
} catch (error) {
  console.log('❌ 一致性检查失败:', error.message);
}

console.log('\n🎉 兼容性测试完成！'); 