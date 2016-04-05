"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhitesunsPassage extends UnimplementedCard {
  constructor(game) {
    super(game, "Whitesun's Passage", "Scars of Mirrodin", "SOM");
  }
}

module.exports = WhitesunsPassage;
