"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ButcherGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Butcher Ghoul", "Avacyn Restored", "AVR");
  }
}

module.exports = ButcherGhoul;
