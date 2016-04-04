"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarkovWarlord extends Card {
  constructor(game) {
    super(game, "Markov Warlord", "Dark Ascension", "DKA");
  }
}

module.exports = MarkovWarlord;
