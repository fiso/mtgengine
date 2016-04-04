"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RekindledFlame extends UnimplementedCard {
  constructor(game) {
    super(game, "Rekindled Flame", "Eventide", "EVE");
  }
}

module.exports = RekindledFlame;
