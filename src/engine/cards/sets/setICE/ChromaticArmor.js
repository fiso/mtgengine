"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChromaticArmor extends UnimplementedCard {
  constructor (game) {
    super(game, "Chromatic Armor", "Ice Age", "ICE");
  }
}

module.exports = ChromaticArmor;
