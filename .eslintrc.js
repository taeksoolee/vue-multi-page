module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    // 'vue/no-unused-vars': 'warn',  // 사용하지 않는 변수 경고
    // 'vue/require-default-prop': 'off',  // default 값 필수 여부 비활성화
  }
}