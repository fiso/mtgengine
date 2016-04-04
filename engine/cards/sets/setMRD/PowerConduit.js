"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PowerConduit extends Card {
  constructor(game) {
    super(game, "Power Conduit", "Mirrodin", "MRD");
  }
}

module.exports = PowerConduit;
