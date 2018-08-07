"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathMaskDuplicant extends UnimplementedCard {
  constructor (game) {
    super(game, "Death-Mask Duplicant", "Darksteel", "DST");
  }
}

module.exports = DeathMaskDuplicant;
