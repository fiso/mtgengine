"use strict";
const Constants = require ("../../../Constants");
const TimeWalkBase = require("../setVMA/TimeWalk");

class TimeWalk extends TimeWalkBase {
  constructor (game) {
    super(game, "Time Walk", "Vintage Championship", "OVNT");
  }
}

module.exports = TimeWalk;
