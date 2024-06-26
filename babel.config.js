module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      { targets: { node: 'current' }, runtime: 'automatic' },
    ],
    '@babel/preset-typescript',
  ],
};
