"use strict";
const Constants = require ("../../../Constants");
const EmancipationAngelBase = require("../setDDQ/EmancipationAngel");

class EmancipationAngel extends EmancipationAngelBase {
  constructor (game) {
    super(game, "Emancipation Angel", "Avacyn Restored", "AVR");
  }
}

module.exports = EmancipationAngel;
