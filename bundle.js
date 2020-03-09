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
