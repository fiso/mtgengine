"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RotlungReanimator extends Card {
  constructor(game) {
    super(game, "Rotlung Reanimator", "Onslaught", "ONS");
  }
}

module.exports = RotlungReanimator;
