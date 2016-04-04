"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MineExcavation extends Card {
  constructor(game) {
    super(game, "Mine Excavation", "Shadowmoor", "SHM");
  }
}

module.exports = MineExcavation;
