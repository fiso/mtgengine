"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnnaturalHunger extends UnimplementedCard {
  constructor (game) {
    super(game, "Unnatural Hunger", "Mercadian Masques", "MMQ");
  }
}

module.exports = UnnaturalHunger;
