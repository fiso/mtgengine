"use strict";
const Constants = require ("../../../Constants");
const EmeriaAngelBase = require("../setpWPN/EmeriaAngel");

class EmeriaAngel extends EmeriaAngelBase {
  constructor(game) {
    super(game, "Emeria Angel", "Zendikar", "ZEN");
  }
}

module.exports = EmeriaAngel;
