"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreaterGargadon extends UnimplementedCard {
  constructor (game) {
    super(game, "Greater Gargadon", "Modern Masters", "MMA");
  }
}

module.exports = GreaterGargadon;
