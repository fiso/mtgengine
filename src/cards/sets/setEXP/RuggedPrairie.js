"use strict";
const Constants = require ("../../../Constants");
const RuggedPrairieBase = require("../setA25/RuggedPrairie");

class RuggedPrairie extends RuggedPrairieBase {
  constructor (game) {
    super(game, "Rugged Prairie", "Zendikar Expeditions", "EXP");
  }
}

module.exports = RuggedPrairie;
