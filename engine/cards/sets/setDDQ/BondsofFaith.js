"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BondsofFaith extends Card {
  constructor(game) {
    super(game, "Bonds of Faith", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = BondsofFaith;
