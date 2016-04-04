"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoneMask extends Card {
  constructor(game) {
    super(game, "Bone Mask", "Mirage", "MIR");
  }
}

module.exports = BoneMask;
