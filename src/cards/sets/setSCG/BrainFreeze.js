"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrainFreeze extends UnimplementedCard {
  constructor(game) {
    super(game, "Brain Freeze", "Scourge", "SCG");
  }
}

module.exports = BrainFreeze;
