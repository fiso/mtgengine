"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurdenofGreed extends Card {
  constructor(game) {
    super(game, "Burden of Greed", "Darksteel", "DST");
  }
}

module.exports = BurdenofGreed;
