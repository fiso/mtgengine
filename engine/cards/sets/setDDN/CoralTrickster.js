"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoralTrickster extends Card {
  constructor(game) {
    super(game, "Coral Trickster", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = CoralTrickster;
