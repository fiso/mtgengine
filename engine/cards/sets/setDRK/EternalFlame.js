"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EternalFlame extends Card {
  constructor(game) {
    super(game, "Eternal Flame", "The Dark", "DRK");
  }
}

module.exports = EternalFlame;
