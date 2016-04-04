"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeoninSnarecaster extends Card {
  constructor(game) {
    super(game, "Leonin Snarecaster", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = LeoninSnarecaster;
