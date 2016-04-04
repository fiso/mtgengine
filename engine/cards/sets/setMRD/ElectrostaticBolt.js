"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElectrostaticBolt extends Card {
  constructor(game) {
    super(game, "Electrostatic Bolt", "Mirrodin", "MRD");
  }
}

module.exports = ElectrostaticBolt;
