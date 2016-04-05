"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AllIsDust extends UnimplementedCard {
  constructor(game) {
    super(game, "All Is Dust", "Grand Prix", "pGPX");
  }
}

module.exports = AllIsDust;
