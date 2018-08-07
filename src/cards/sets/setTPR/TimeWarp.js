"use strict";
const Constants = require ("../../../Constants");
const TimeWarpBase = require("../setE02/TimeWarp");

class TimeWarp extends TimeWarpBase {
  constructor (game) {
    super(game, "Time Warp", "Tempest Remastered", "TPR");
  }
}

module.exports = TimeWarp;
