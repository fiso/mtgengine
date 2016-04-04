"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeedGuardian extends Card {
  constructor(game) {
    super(game, "Seed Guardian", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SeedGuardian;
