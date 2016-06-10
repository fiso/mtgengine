"use strict";
const Constants = require ("../../../Constants");
const TimeWarpBase = require("../setpJGP/TimeWarp");

class TimeWarp extends TimeWarpBase {
  constructor (game) {
    super(game, "Time Warp", "Magic 2010", "M10");
  }
}

module.exports = TimeWarp;
