"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenefactorsDraught extends UnimplementedCard {
  constructor (game) {
    super(game, "Benefactor's Draught", "You Make the Cube", "PZ2");
  }
}

module.exports = BenefactorsDraught;
