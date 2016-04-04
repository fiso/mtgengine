"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HollowbornBarghest extends Card {
  constructor(game) {
    super(game, "Hollowborn Barghest", "Shadowmoor", "SHM");
  }
}

module.exports = HollowbornBarghest;
