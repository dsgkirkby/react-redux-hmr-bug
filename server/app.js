const express = require('express');
const path = require('path');

const app = express();

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config');

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
}));

app.use(webpackHotMiddleware(compiler));

app.set('views', path.join(process.cwd(), 'server', 'views'));
app.set('view engine', 'pug');
app.get('/', (req, res, next) => res.render('index'));

app.listen(8080, () => {
  console.log('Listening on port 8080.');
});
