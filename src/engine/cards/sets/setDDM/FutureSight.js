"use strict";
const Constants = require ("../../../Constants");
const FutureSightBase = require("../setEMA/FutureSight");

class FutureSight extends FutureSightBase {
  constructor (game) {
    super(game, "Future Sight", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = FutureSight;
