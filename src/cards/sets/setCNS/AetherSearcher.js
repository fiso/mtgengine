"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherSearcher extends UnimplementedCard {
  constructor(game) {
    super(game, "Æther Searcher", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = AetherSearcher;
