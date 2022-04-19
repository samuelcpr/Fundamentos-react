## para que o projeto poossa rodar css é necessario instalar algumas depedencias, e configurar no (webpack.config.js)
{
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],  
          }
# depedencias
* style-loader
* css-loader 
  
  <yarn add style-loader css-loader -D>