"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RuggedPrairieBase = require("../setEVE/RuggedPrairie.js");

class RuggedPrairie extends RuggedPrairieBase {
  constructor(game) {
    super(game, "Rugged Prairie", "Zendikar Expedition", "EXP");
  }
}

module.exports = RuggedPrairie;
