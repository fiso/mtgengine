"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodlineShaman extends Card {
  constructor(game) {
    super(game, "Bloodline Shaman", "Onslaught", "ONS");
  }
}

module.exports = BloodlineShaman;
