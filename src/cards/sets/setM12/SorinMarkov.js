"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SorinMarkov extends UnimplementedCard {
  constructor(game) {
    super(game, "Sorin Markov", "Magic 2012", "M12");
  }
}

module.exports = SorinMarkov;
