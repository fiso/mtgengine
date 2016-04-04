"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HellsThunder extends Card {
  constructor(game) {
    super(game, "Hell's Thunder", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = HellsThunder;
