"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DualNature extends Card {
  constructor(game) {
    super(game, "Dual Nature", "Prophecy", "PCY");
  }
}

module.exports = DualNature;
