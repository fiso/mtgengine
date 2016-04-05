"use strict";
const Constants = require ("../../../Constants");
const TimeWarpBase = require("../setpJGP/TimeWarp");

class TimeWarp extends TimeWarpBase {
  constructor(game) {
    super(game, "Time Warp", "Tempest", "TMP");
  }
}

module.exports = TimeWarp;
