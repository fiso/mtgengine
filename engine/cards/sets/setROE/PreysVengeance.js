"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PreysVengeance extends UnimplementedCard {
  constructor(game) {
    super(game, "Prey's Vengeance", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = PreysVengeance;
