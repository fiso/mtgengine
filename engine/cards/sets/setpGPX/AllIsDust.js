"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AllIsDust extends Card {
  constructor(game) {
    super(game, "All Is Dust", "Grand Prix", "pGPX");
  }
}

module.exports = AllIsDust;
