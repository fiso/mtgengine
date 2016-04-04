"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrainFreeze extends Card {
  constructor(game) {
    super(game, "Brain Freeze", "Scourge", "SCG");
  }
}

module.exports = BrainFreeze;
