"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExemplarofStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Exemplar of Strength", "Amonkhet", "AKH");
  }
}

module.exports = ExemplarofStrength;
