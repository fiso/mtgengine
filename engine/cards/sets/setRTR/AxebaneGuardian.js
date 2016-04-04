"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AxebaneGuardian extends Card {
  constructor(game) {
    super(game, "Axebane Guardian", "Return to Ravnica", "RTR");
  }
}

module.exports = AxebaneGuardian;
