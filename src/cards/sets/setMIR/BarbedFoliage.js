"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbedFoliage extends UnimplementedCard {
  constructor (game) {
    super(game, "Barbed Foliage", "Mirage", "MIR");
  }
}

module.exports = BarbedFoliage;
