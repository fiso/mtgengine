"use strict";
const Constants = require ("../../../Constants");
const GoblinPatrolBase = require("../setUSG/GoblinPatrol");

class GoblinPatrol extends GoblinPatrolBase {
  constructor(game) {
    super(game, "Goblin Patrol", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinPatrol;
