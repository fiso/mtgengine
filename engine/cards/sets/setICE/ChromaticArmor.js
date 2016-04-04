"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChromaticArmor extends Card {
  constructor(game) {
    super(game, "Chromatic Armor", "Ice Age", "ICE");
  }
}

module.exports = ChromaticArmor;
