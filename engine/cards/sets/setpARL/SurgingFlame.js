"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SurgingFlame extends Card {
  constructor(game) {
    super(game, "Surging Flame", "Arena League", "pARL");
  }
}

module.exports = SurgingFlame;
