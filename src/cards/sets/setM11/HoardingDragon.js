"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoardingDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Hoarding Dragon", "Magic 2011", "M11");
  }
}

module.exports = HoardingDragon;
