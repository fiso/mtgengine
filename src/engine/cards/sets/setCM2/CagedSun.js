"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CagedSun extends UnimplementedCard {
  constructor (game) {
    super(game, "Caged Sun", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = CagedSun;
