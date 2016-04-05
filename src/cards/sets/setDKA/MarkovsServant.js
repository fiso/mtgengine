"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkovsServant extends UnimplementedCard {
  constructor(game) {
    super(game, "Markov's Servant", "Dark Ascension", "DKA");
  }
}

module.exports = MarkovsServant;
