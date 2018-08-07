"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherSearcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Searcher", "Conspiracy", "CNS");
  }
}

module.exports = AetherSearcher;
