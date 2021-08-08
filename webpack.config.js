const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// module.exports 밖에서 가져다 쓸 수 있도록 내보낸다.
module.exports = {
  // __dirname = 지금 나의(= 파일) 경로
  // => webpack.config.js 를 기준으로 ./src/index.js 경로

  // entry 시작점
  entry: path.resolve(__dirname, './src/index.js'),
  // output 빌드 결과물을 내보내는곳
  output: {
    filename: 'bundle.[hash].js',
    // 나를 기준으로 ./dist 폴더 안에 빌드 결과물을 생성 할 것 이다.
    path: path.resolve(__dirname, 'dist'),
  },
  // 웹팩은 파일을 가져 올 수는 있지만 안에 있는 코드를 해석하지는 못한다.
  // 부가적인 loader (코드를 해석 할 수 있는 수단)
  // (= 예시. 파일을 읽는 규칙들을 추가 할 수 있는 곳) 들을 추가 할 수 있다.
  // sass -> css 변화 한다던가
  // react -> 순수 js 로 변화 한다던가
  // ES6 -> ES5 로 변화한다던가
  module: {
    rules: [
      {
        test: /\.(js)$/, // JS로 끝나는 파일들을 읽어온다.
        use: 'babel-loader', // 읽어온 파일을 babel 로 변화시킨다.
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // 오른쪽에서 왼쪽으로 읽는다.
        exclude: /node_modules/,
      },
    ],
  },
  // 모듈시스템
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 어떤 html 파일을 기준으로 동작을 할 것 인가 ?
      filename: './index.html', // 이름을 어떻게 내보낼 것인가 ? output path 를 따라간다.
    }),
    new MiniCssExtractPlugin({ filename: 'css/style.css' }), // css 파일만 따로 추출하겠다.
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true,
  },
}
