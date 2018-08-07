"use strict";
const Constants = require ("../../../Constants");
const InfestBase = require("../setCN2/Infest");

class Infest extends InfestBase {
  constructor (game) {
    super(game, "Infest", "Magic Player Rewards 2010", "P10");
  }
}

module.exports = Infest;
