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

  **O arquivo que vai ser chamado no *html* é o bundle.js pois ele já esta interpretado.**

### executando, no terminal

  > yarn dev | npm dev

#### arquivo main.js

  ```js
    class Handle_babel {
    constructor(){
      this.name = ""
      this.hash = Math.random()
      this.execute()
    }

    execute() {
      console.log(`User: ${this.name} \n Id: ${this.hash}`)
    }
  }
  ```

#### arquivo bundle.js -> babel cria ele automaticamento

  ```js
    "use strict";

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

    var Handle_babel = /*#__PURE__*/function () {
      function Handle_babel() {
        _classCallCheck(this, Handle_babel);

        this.name = "";
        this.hash = Math.random();
        this.execute();
      }

      _createClass(Handle_babel, [{
        key: "execute",
        value: function execute() {
          console.log("User: ".concat(this.name, " \n Id: ").concat(this.hash));
        }
      }]);

      return Handle_babel;
    }();
  ```
