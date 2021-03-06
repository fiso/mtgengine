"use strict";
const Constants = require ("../../../Constants");
const WallofDenialBase = require("../setMM3/WallofDenial");

class WallofDenial extends WallofDenialBase {
  constructor (game) {
    super(game, "Wall of Denial", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = WallofDenial;
