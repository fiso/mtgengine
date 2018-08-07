"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrashingTide extends UnimplementedCard {
  constructor (game) {
    super(game, "Crashing Tide", "Rivals of Ixalan", "RIX");
  }
}

module.exports = CrashingTide;
