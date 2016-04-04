"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gelectrode extends Card {
  constructor(game) {
    super(game, "Gelectrode", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Gelectrode;
