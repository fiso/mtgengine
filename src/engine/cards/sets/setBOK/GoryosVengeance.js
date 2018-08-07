"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoryosVengeance extends UnimplementedCard {
  constructor (game) {
    super(game, "Goryo's Vengeance", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = GoryosVengeance;
