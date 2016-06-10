"use strict";
const Constants = require ("../../../Constants");
const HadaSpyPatrolBase = require("../setC13/HadaSpyPatrol");

class HadaSpyPatrol extends HadaSpyPatrolBase {
  constructor (game) {
    super(game, "Hada Spy Patrol", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = HadaSpyPatrol;
