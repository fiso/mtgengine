"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HowlingBanshee extends Card {
  constructor(game) {
    super(game, "Howling Banshee", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = HowlingBanshee;
