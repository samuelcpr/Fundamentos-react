## Instalar o sass
yarn add node-sass -D

## para remover depedencia
yarn remove sass -D

# 1ª Dependencia

yarn add sass-loader

{
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader'],  
          }