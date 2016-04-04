"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarkovsServant extends Card {
  constructor(game) {
    super(game, "Markov's Servant", "Dark Ascension", "DKA");
  }
}

module.exports = MarkovsServant;
