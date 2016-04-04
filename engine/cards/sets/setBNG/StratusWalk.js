"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StratusWalk extends Card {
  constructor(game) {
    super(game, "Stratus Walk", "Born of the Gods", "BNG");
  }
}

module.exports = StratusWalk;
