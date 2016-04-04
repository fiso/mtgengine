"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MortalWound extends Card {
  constructor(game) {
    super(game, "Mortal Wound", "Visions", "VIS");
  }
}

module.exports = MortalWound;
