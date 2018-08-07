"use strict";
const Constants = require ("../../../Constants");
const MoggFanaticBase = require("../setEMA/MoggFanatic");

class MoggFanatic extends MoggFanaticBase {
  constructor (game) {
    super(game, "Mogg Fanatic", "World Championship Decks 1998", "WC98");
  }
}

module.exports = MoggFanatic;
