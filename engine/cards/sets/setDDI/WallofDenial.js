"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofDenialBase = require("../setARB/WallofDenial.js");

class WallofDenial extends WallofDenialBase {
  constructor(game) {
    super(game, "Wall of Denial", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = WallofDenial;
