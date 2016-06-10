"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurgeofStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Surge of Strength", "Alliances", "ALL");
  }
}

module.exports = SurgeofStrength;
