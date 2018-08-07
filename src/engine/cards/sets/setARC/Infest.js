"use strict";
const Constants = require ("../../../Constants");
const InfestBase = require("../setCN2/Infest");

class Infest extends InfestBase {
  constructor (game) {
    super(game, "Infest", "Archenemy", "ARC");
  }
}

module.exports = Infest;
