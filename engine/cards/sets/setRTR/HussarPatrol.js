"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HussarPatrolBase = require("../setDDN/HussarPatrol.js");

class HussarPatrol extends HussarPatrolBase {
  constructor(game) {
    super(game, "Hussar Patrol", "Return to Ravnica", "RTR");
  }
}

module.exports = HussarPatrol;
