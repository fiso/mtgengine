"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StitchedDrake extends Card {
  constructor(game) {
    super(game, "Stitched Drake", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = StitchedDrake;
