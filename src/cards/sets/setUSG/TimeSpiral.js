"use strict";
const Constants = require ("../../../Constants");
const TimeSpiralBase = require("../setPRM/TimeSpiral");

class TimeSpiral extends TimeSpiralBase {
  constructor (game) {
    super(game, "Time Spiral", "Urza's Saga", "USG");
  }
}

module.exports = TimeSpiral;
