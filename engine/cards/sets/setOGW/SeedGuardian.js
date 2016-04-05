"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeedGuardian extends UnimplementedCard {
  constructor(game) {
    super(game, "Seed Guardian", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SeedGuardian;
