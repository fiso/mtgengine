"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StarlitSanctum extends Card {
  constructor(game) {
    super(game, "Starlit Sanctum", "Onslaught", "ONS");
  }
}

module.exports = StarlitSanctum;
