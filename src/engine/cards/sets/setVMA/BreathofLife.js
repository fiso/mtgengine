"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BreathofLife extends UnimplementedCard {
  constructor (game) {
    super(game, "Breath of Life", "Vintage Masters", "VMA");
  }
}

module.exports = BreathofLife;
