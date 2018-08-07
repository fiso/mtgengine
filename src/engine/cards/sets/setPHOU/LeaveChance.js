"use strict";
const Constants = require ("../../../Constants");
const LeaveChanceBase = require("../setHOU/LeaveChance");

class LeaveChance extends LeaveChanceBase {
  constructor (game) {
    super(game, "Leave // Chance", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = LeaveChance;
