"use strict";
const Constants = require ("../../../Constants");
const SkyhunterPatrolBase = require("../setDDG/SkyhunterPatrol");

class SkyhunterPatrol extends SkyhunterPatrolBase {
  constructor(game) {
    super(game, "Skyhunter Patrol", "Mirrodin", "MRD");
  }
}

module.exports = SkyhunterPatrol;
