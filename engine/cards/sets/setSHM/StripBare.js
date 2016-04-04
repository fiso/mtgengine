"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StripBare extends Card {
  constructor(game) {
    super(game, "Strip Bare", "Shadowmoor", "SHM");
  }
}

module.exports = StripBare;
