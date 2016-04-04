"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RakingCanopy extends Card {
  constructor(game) {
    super(game, "Raking Canopy", "Shadowmoor", "SHM");
  }
}

module.exports = RakingCanopy;
