"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorpulentCorpse extends UnimplementedCard {
  constructor(game) {
    super(game, "Corpulent Corpse", "Time Spiral", "TSP");
  }
}

module.exports = CorpulentCorpse;
