"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CaravanEscort extends Card {
  constructor(game) {
    super(game, "Caravan Escort", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = CaravanEscort;
