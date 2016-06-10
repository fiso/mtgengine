"use strict";
const Constants = require ("../../../Constants");
const GoblinSkiPatrolBase = require("../setICE/GoblinSkiPatrol");

class GoblinSkiPatrol extends GoblinSkiPatrolBase {
  constructor (game) {
    super(game, "Goblin Ski Patrol", "Masters Edition II", "ME2");
  }
}

module.exports = GoblinSkiPatrol;
