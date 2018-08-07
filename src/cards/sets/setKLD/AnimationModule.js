"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnimationModule extends UnimplementedCard {
  constructor (game) {
    super(game, "Animation Module", "Kaladesh", "KLD");
  }
}

module.exports = AnimationModule;
