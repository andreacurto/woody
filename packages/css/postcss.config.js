module.exports = {
  plugins: [
    'postcss-import',
    'postcss-nesting',
    'postcss-custom-media',
    'autoprefixer',
    ...(process.env.NODE_ENV === 'production' ? ['cssnano'] : []),
  ],
};
