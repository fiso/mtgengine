"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarduHeartPiercer extends Card {
  constructor(game) {
    super(game, "Mardu Heart-Piercer", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = MarduHeartPiercer;
