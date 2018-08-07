"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoldenDemise extends UnimplementedCard {
  constructor (game) {
    super(game, "Golden Demise", "Rivals of Ixalan", "RIX");
  }
}

module.exports = GoldenDemise;
