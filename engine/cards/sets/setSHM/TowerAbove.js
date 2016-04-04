"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TowerAbove extends Card {
  constructor(game) {
    super(game, "Tower Above", "Shadowmoor", "SHM");
  }
}

module.exports = TowerAbove;
