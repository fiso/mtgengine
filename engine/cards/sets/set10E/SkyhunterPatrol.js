"use strict";
const Constants = require ("../../../Constants");
const SkyhunterPatrolBase = require("../setDDG/SkyhunterPatrol");

class SkyhunterPatrol extends SkyhunterPatrolBase {
  constructor(game) {
    super(game, "Skyhunter Patrol", "Tenth Edition", "10E");
  }
}

module.exports = SkyhunterPatrol;
