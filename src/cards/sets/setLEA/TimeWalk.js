"use strict";
const Constants = require ("../../../Constants");
const TimeWalkBase = require("../setCED/TimeWalk");

class TimeWalk extends TimeWalkBase {
  constructor(game) {
    super(game, "Time Walk", "Limited Edition Alpha", "LEA");
  }
}

module.exports = TimeWalk;
