"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IncreasingVengeance extends UnimplementedCard {
  constructor(game) {
    super(game, "Increasing Vengeance", "Dark Ascension", "DKA");
  }
}

module.exports = IncreasingVengeance;
