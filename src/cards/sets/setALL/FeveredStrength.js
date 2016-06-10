"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeveredStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Fevered Strength", "Alliances", "ALL");
  }
}

module.exports = FeveredStrength;
