"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RotcrownGhoul extends Card {
  constructor(game) {
    super(game, "Rotcrown Ghoul", "Avacyn Restored", "AVR");
  }
}

module.exports = RotcrownGhoul;
