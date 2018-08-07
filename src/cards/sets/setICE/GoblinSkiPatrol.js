"use strict";
const Constants = require ("../../../Constants");
const GoblinSkiPatrolBase = require("../setME2/GoblinSkiPatrol");

class GoblinSkiPatrol extends GoblinSkiPatrolBase {
  constructor (game) {
    super(game, "Goblin Ski Patrol", "Ice Age", "ICE");
  }
}

module.exports = GoblinSkiPatrol;
