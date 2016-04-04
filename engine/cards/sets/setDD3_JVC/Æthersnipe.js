"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Æthersnipe extends Card {
  constructor(game) {
    super(game, "Æthersnipe", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Æthersnipe;
