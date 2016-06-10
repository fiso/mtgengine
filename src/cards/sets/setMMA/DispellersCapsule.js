"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DispellersCapsule extends UnimplementedCard {
  constructor (game) {
    super(game, "Dispeller's Capsule", "Modern Masters", "MMA");
  }
}

module.exports = DispellersCapsule;
