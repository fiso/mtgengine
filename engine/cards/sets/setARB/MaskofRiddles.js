"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MaskofRiddles extends Card {
  constructor(game) {
    super(game, "Mask of Riddles", "Alara Reborn", "ARB");
  }
}

module.exports = MaskofRiddles;
