"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DispellersCapsule extends Card {
  constructor(game) {
    super(game, "Dispeller's Capsule", "Modern Masters", "MMA");
  }
}

module.exports = DispellersCapsule;
