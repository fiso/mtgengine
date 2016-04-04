"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AmberPrisonBase = require("../set6ED/AmberPrison.js");

class AmberPrison extends AmberPrisonBase {
  constructor(game) {
    super(game, "Amber Prison", "Mirage", "MIR");
  }
}

module.exports = AmberPrison;
