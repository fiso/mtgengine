"use strict";
const Constants = require ("../../../Constants");
const ValorBase = require("../setTSB/Valor");

class Valor extends ValorBase {
  constructor (game) {
    super(game, "Valor", "Judgment", "JUD");
  }
}

module.exports = Valor;
