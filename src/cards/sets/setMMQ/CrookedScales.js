"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrookedScales extends UnimplementedCard {
  constructor(game) {
    super(game, "Crooked Scales", "Mercadian Masques", "MMQ");
  }
}

module.exports = CrookedScales;
