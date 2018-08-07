"use strict";
const Constants = require ("../../../Constants");
const InfestBase = require("../setCN2/Infest");

class Infest extends InfestBase {
  constructor (game) {
    super(game, "Infest", "Commander 2013", "C13");
  }
}

module.exports = Infest;
