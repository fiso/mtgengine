"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SelvalasEnforcer extends Card {
  constructor(game) {
    super(game, "Selvala's Enforcer", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SelvalasEnforcer;
