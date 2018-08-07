"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuinProcessor extends UnimplementedCard {
  constructor (game) {
    super(game, "Ruin Processor", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RuinProcessor;
