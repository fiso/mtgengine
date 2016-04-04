"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiamondFaerie extends Card {
  constructor(game) {
    super(game, "Diamond Faerie", "Coldsnap", "CSP");
  }
}

module.exports = DiamondFaerie;
