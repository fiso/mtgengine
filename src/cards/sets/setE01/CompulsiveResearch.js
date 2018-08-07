"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CompulsiveResearch extends UnimplementedCard {
  constructor (game) {
    super(game, "Compulsive Research", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = CompulsiveResearch;
