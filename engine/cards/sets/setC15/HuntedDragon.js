"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntedDragon extends UnimplementedCard {
  constructor(game) {
    super(game, "Hunted Dragon", "Commander 2015", "C15");
  }
}

module.exports = HuntedDragon;
