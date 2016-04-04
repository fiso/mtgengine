"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SimicGrowthChamberBase = require("../setC15/SimicGrowthChamber.js");

class SimicGrowthChamber extends SimicGrowthChamberBase {
  constructor(game) {
    super(game, "Simic Growth Chamber", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = SimicGrowthChamber;
