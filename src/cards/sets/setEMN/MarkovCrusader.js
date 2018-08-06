"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkovCrusader extends UnimplementedCard {
  constructor (game) {
    super(game, "Markov Crusader", "Eldritch Moon", "EMN");
  }
}

module.exports = MarkovCrusader;
