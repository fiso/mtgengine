"use strict";
const Constants = require ("../../../Constants");
const ExaltedAngelBase = require("../setV15/ExaltedAngel");

class ExaltedAngel extends ExaltedAngelBase {
  constructor (game) {
    super(game, "Exalted Angel", "Judge Gift Program", "pJGP");
  }
}

module.exports = ExaltedAngel;
