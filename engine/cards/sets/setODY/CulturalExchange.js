"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CulturalExchange extends UnimplementedCard {
  constructor(game) {
    super(game, "Cultural Exchange", "Odyssey", "ODY");
  }
}

module.exports = CulturalExchange;
