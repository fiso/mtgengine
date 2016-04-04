"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TimeWarpBase = require("../setpJGP/TimeWarp.js");

class TimeWarp extends TimeWarpBase {
  constructor(game) {
    super(game, "Time Warp", "Tempest Remastered", "TPR");
  }
}

module.exports = TimeWarp;
