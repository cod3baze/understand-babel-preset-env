# @Babel

  >Transforma as features do ES6 | ES7.. de forma que os navegadores entendaõ.

## Libs

  > yarn add { **lib** }  |  npm install { **lib** } --save

  ``@babel/cli`` >  para poder executar comandos babel no terminal.
  ``@babel/preset-env`` > determina o tipo de ambiemte que esta sendo utilizado. (web, mobile...).
  ``@babel/core`` > Núcleo do funcionamento babel.

### Explicando

  > package.json

  Cria um script chamado **dev** para ser executado no terminal. Quando executar esse script vai chamar o babel que vai enterpretar os códigos do arquivo **main.js** e jogar **-o** para **bundle.js**. Script interpretado para todos os navegadores entenderem.

  ```json
    "scripts": { 
      "dev": "babel ./main.js -o bundle.js"
    }
  ```
