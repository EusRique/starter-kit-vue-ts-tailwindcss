module.exports = {
  parser: '@typescript-eslint/parser', // Usa o parser do TypeScript
  parserOptions: {
    ecmaVersion: 2020, // Para suportar recursos modernos do JavaScript
    sourceType: 'module', // Para suportar módulos ES6
    ecmaFeatures: {
      jsx: false, // Para garantir que JSX não será analisado, caso não use
    },
  },
  extends: [
    'eslint:recommended', // Regras recomendadas do ESLint
    'plugin:vue/vue3-recommended', // Regras recomendadas do ESLint para Vue 3
    'plugin:@typescript-eslint/recommended', // Regras recomendadas para TypeScript
    'airbnb-base', // Regras de estilo base do Airbnb
  ],
  plugins: ['vue', '@typescript-eslint'],
  env: {
    browser: true, // Permite acessar variáveis globais do navegador
    node: true, // Permite acessar variáveis globais do Node.js
  },
  rules: {
    'vue/no-unused-vars': 'warn', // Alerta para variáveis não usadas no Vue
    'vue/multi-word-component-names': 'off', // Desativa a regra que obriga nomes de componentes multi-palavra
    '@typescript-eslint/no-explicit-any': 'warn', // Alerta para o uso de `any` no TypeScript
    'no-console': 'warn', // Alerta sobre o uso de `console.log` no código
    'no-debugger': 'warn', // Alerta sobre o uso de `debugger` no código
    'import/no-unresolved': 'off', // Desativa a verificação de módulos importados
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'max-len': ['warn', { code: 120 }], // Limite de tamanho de linha (ajustado para 120 no Vue)
      },
    },
  ],
};
