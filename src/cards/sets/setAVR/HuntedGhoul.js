"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntedGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunted Ghoul", "Avacyn Restored", "AVR");
  }
}

module.exports = HuntedGhoul;
