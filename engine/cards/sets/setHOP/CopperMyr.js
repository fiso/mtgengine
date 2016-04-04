"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CopperMyrBase = require("../setMRD/CopperMyr.js");

class CopperMyr extends CopperMyrBase {
  constructor(game) {
    super(game, "Copper Myr", "Planechase", "HOP");
  }
}

module.exports = CopperMyr;
