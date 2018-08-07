"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntedDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunted Dragon", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = HuntedDragon;
