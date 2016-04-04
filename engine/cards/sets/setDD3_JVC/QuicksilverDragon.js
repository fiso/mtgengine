"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuicksilverDragon extends Card {
  constructor(game) {
    super(game, "Quicksilver Dragon", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = QuicksilverDragon;
