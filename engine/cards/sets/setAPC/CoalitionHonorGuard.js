"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoalitionHonorGuard extends Card {
  constructor(game) {
    super(game, "Coalition Honor Guard", "Apocalypse", "APC");
  }
}

module.exports = CoalitionHonorGuard;
