"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodlineShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodline Shaman", "Onslaught", "ONS");
  }
}

module.exports = BloodlineShaman;
