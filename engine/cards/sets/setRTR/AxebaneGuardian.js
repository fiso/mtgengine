"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AxebaneGuardian extends UnimplementedCard {
  constructor(game) {
    super(game, "Axebane Guardian", "Return to Ravnica", "RTR");
  }
}

module.exports = AxebaneGuardian;
