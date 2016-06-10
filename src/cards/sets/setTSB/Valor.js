"use strict";
const Constants = require ("../../../Constants");
const ValorBase = require("../setJUD/Valor");

class Valor extends ValorBase {
  constructor (game) {
    super(game, "Valor", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = Valor;
