"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinPatrolBase = require("../setUSG/GoblinPatrol.js");

class GoblinPatrol extends GoblinPatrolBase {
  constructor(game) {
    super(game, "Goblin Patrol", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinPatrol;
