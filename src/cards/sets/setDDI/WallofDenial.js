"use strict";
const Constants = require ("../../../Constants");
const WallofDenialBase = require("../setARB/WallofDenial");

class WallofDenial extends WallofDenialBase {
  constructor (game) {
    super(game, "Wall of Denial", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = WallofDenial;
