"use strict";
const Constants = require ("../../../Constants");
const TimeWalkBase = require("../setCED/TimeWalk");

class TimeWalk extends TimeWalkBase {
  constructor(game) {
    super(game, "Time Walk", "Unlimited Edition", "2ED");
  }
}

module.exports = TimeWalk;
