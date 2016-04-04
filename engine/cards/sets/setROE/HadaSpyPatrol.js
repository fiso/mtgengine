"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HadaSpyPatrolBase = require("../setC13/HadaSpyPatrol.js");

class HadaSpyPatrol extends HadaSpyPatrolBase {
  constructor(game) {
    super(game, "Hada Spy Patrol", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = HadaSpyPatrol;
