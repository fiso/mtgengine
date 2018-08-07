"use strict";
const Constants = require ("../../../Constants");
const TimeWarpBase = require("../setE02/TimeWarp");

class TimeWarp extends TimeWarpBase {
  constructor (game) {
    super(game, "Time Warp", "Judge Gift Cards 2004", "G04");
  }
}

module.exports = TimeWarp;
