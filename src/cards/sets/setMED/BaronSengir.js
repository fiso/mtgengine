"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BaronSengir extends UnimplementedCard {
  constructor (game) {
    super(game, "Baron Sengir", "Masters Edition", "MED");
  }
}

module.exports = BaronSengir;
