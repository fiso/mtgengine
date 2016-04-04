"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinSkiPatrolBase = require("../setICE/GoblinSkiPatrol.js");

class GoblinSkiPatrol extends GoblinSkiPatrolBase {
  constructor(game) {
    super(game, "Goblin Ski Patrol", "Masters Edition II", "ME2");
  }
}

module.exports = GoblinSkiPatrol;
