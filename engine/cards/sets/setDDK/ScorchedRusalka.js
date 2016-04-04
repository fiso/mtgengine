"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScorchedRusalka extends Card {
  constructor(game) {
    super(game, "Scorched Rusalka", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = ScorchedRusalka;
