"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ValorBase = require("../setJUD/Valor.js");

class Valor extends ValorBase {
  constructor(game) {
    super(game, "Valor", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Valor;
