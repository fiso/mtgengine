"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AjanisComrade extends UnimplementedCard {
  constructor (game) {
    super(game, "Ajani's Comrade", "Aether Revolt", "AER");
  }
}

module.exports = AjanisComrade;
