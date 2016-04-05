"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ErebossTitan extends UnimplementedCard {
  constructor(game) {
    super(game, "Erebos's Titan", "Magic Origins", "ORI");
  }
}

module.exports = ErebossTitan;
