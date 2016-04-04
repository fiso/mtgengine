"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CopperMyr extends Card {
  constructor(game) {
    super(game, "Copper Myr", "Mirrodin", "MRD");
  }
}

module.exports = CopperMyr;
