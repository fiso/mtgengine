"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PowerofFire extends UnimplementedCard {
  constructor (game) {
    super(game, "Power of Fire", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PowerofFire;
