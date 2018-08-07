"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DenseFoliage extends UnimplementedCard {
  constructor (game) {
    super(game, "Dense Foliage", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DenseFoliage;
