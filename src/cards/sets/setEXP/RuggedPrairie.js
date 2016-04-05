"use strict";
const Constants = require ("../../../Constants");
const RuggedPrairieBase = require("../setEVE/RuggedPrairie");

class RuggedPrairie extends RuggedPrairieBase {
  constructor(game) {
    super(game, "Rugged Prairie", "Zendikar Expedition", "EXP");
  }
}

module.exports = RuggedPrairie;
