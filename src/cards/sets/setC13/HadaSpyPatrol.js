"use strict";
const Constants = require ("../../../Constants");
const HadaSpyPatrolBase = require("../setCMA/HadaSpyPatrol");

class HadaSpyPatrol extends HadaSpyPatrolBase {
  constructor (game) {
    super(game, "Hada Spy Patrol", "Commander 2013", "C13");
  }
}

module.exports = HadaSpyPatrol;
