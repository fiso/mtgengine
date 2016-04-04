"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StaveOff extends Card {
  constructor(game) {
    super(game, "Stave Off", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = StaveOff;
