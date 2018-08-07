"use strict";
const Constants = require ("../../../Constants");
const DragonBroodmotherBase = require("../setARB/DragonBroodmother");

class DragonBroodmother extends DragonBroodmotherBase {
  constructor (game) {
    super(game, "Dragon Broodmother", "Magic Online Promos", "PRM");
  }
}

module.exports = DragonBroodmother;
