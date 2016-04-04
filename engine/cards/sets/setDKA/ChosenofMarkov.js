"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChosenofMarkov extends Card {
  constructor(game) {
    super(game, "Chosen of Markov", "Dark Ascension", "DKA");
  }
}

module.exports = ChosenofMarkov;
