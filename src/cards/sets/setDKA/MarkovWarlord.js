"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkovWarlord extends UnimplementedCard {
  constructor(game) {
    super(game, "Markov Warlord", "Dark Ascension", "DKA");
  }
}

module.exports = MarkovWarlord;
