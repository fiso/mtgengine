"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkySkiff extends UnimplementedCard {
  constructor (game) {
    super(game, "Sky Skiff", "Kaladesh", "KLD");
  }
}

module.exports = SkySkiff;
