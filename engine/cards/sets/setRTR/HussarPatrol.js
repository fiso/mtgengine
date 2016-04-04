"use strict";
const Constants = require ("../../../Constants");
const HussarPatrolBase = require("../setDDN/HussarPatrol");

class HussarPatrol extends HussarPatrolBase {
  constructor(game) {
    super(game, "Hussar Patrol", "Return to Ravnica", "RTR");
  }
}

module.exports = HussarPatrol;
