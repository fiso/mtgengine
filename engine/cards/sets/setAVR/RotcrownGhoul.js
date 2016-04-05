"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RotcrownGhoul extends UnimplementedCard {
  constructor(game) {
    super(game, "Rotcrown Ghoul", "Avacyn Restored", "AVR");
  }
}

module.exports = RotcrownGhoul;
