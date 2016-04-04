"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnergyTapBase = require("../set4ED/EnergyTap.js");

class EnergyTap extends EnergyTapBase {
  constructor(game) {
    super(game, "Energy Tap", "Legends", "LEG");
  }
}

module.exports = EnergyTap;
