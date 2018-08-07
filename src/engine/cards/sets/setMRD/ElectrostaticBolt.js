"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElectrostaticBolt extends UnimplementedCard {
  constructor (game) {
    super(game, "Electrostatic Bolt", "Mirrodin", "MRD");
  }
}

module.exports = ElectrostaticBolt;
