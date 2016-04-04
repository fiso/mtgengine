"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathMaskDuplicant extends Card {
  constructor(game) {
    super(game, "Death-Mask Duplicant", "Darksteel", "DST");
  }
}

module.exports = DeathMaskDuplicant;
