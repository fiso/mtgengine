"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkyhunterPatrolBase = require("../setDDG/SkyhunterPatrol.js");

class SkyhunterPatrol extends SkyhunterPatrolBase {
  constructor(game) {
    super(game, "Skyhunter Patrol", "Mirrodin", "MRD");
  }
}

module.exports = SkyhunterPatrol;
