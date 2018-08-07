"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArtificialEvolution extends UnimplementedCard {
  constructor (game) {
    super(game, "Artificial Evolution", "Onslaught", "ONS");
  }
}

module.exports = ArtificialEvolution;
