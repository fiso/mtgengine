"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChosenofMarkov extends UnimplementedCard {
  constructor(game) {
    super(game, "Chosen of Markov", "Dark Ascension", "DKA");
  }
}

module.exports = ChosenofMarkov;
