"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BondsofFaith extends UnimplementedCard {
  constructor(game) {
    super(game, "Bonds of Faith", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = BondsofFaith;
