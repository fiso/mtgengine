"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoardingDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Hoarding Dragon", "Iconic Masters", "IMA");
  }
}

module.exports = HoardingDragon;
