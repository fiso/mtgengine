"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PowerConduit extends UnimplementedCard {
  constructor (game) {
    super(game, "Power Conduit", "Mirrodin", "MRD");
  }
}

module.exports = PowerConduit;
