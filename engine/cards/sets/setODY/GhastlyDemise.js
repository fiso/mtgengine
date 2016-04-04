"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhastlyDemise extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghastly Demise", "Odyssey", "ODY");
  }
}

module.exports = GhastlyDemise;
