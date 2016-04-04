"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuntedGhoul extends Card {
  constructor(game) {
    super(game, "Hunted Ghoul", "Avacyn Restored", "AVR");
  }
}

module.exports = HuntedGhoul;
