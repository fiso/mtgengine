"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VassalSoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Vassal Soul", "Return to Ravnica", "RTR");
  }
}

module.exports = VassalSoul;
