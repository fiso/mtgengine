"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScrapskinDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Scrapskin Drake", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ScrapskinDrake;
