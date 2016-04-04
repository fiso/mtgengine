"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcTrail extends Card {
  constructor(game) {
    super(game, "Arc Trail", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = ArcTrail;
