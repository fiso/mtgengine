"use strict";
const Constants = require ("../../../Constants");
const GoblinPatrolBase = require("../setVMA/GoblinPatrol");

class GoblinPatrol extends GoblinPatrolBase {
  constructor (game) {
    super(game, "Goblin Patrol", "Urza's Saga", "USG");
  }
}

module.exports = GoblinPatrol;
