"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StitchedDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Stitched Drake", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = StitchedDrake;
