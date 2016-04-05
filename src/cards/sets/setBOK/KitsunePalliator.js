"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KitsunePalliator extends UnimplementedCard {
  constructor(game) {
    super(game, "Kitsune Palliator", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = KitsunePalliator;
