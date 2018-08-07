"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DispellersCapsule extends UnimplementedCard {
  constructor (game) {
    super(game, "Dispeller's Capsule", "Commander 2016", "C16");
  }
}

module.exports = DispellersCapsule;
