"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DjinnIlluminatus extends Card {
  constructor(game) {
    super(game, "Djinn Illuminatus", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = DjinnIlluminatus;
