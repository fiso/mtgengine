"use strict";
const Constants = require ("../../../Constants");
const TimeWalkBase = require("../setCED/TimeWalk");

class TimeWalk extends TimeWalkBase {
  constructor(game) {
    super(game, "Time Walk", "Vintage Masters", "VMA");
  }
}

module.exports = TimeWalk;
