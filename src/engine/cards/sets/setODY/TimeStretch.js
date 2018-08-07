"use strict";
const Constants = require ("../../../Constants");
const TimeStretchBase = require("../set10E/TimeStretch");

class TimeStretch extends TimeStretchBase {
  constructor (game) {
    super(game, "Time Stretch", "Odyssey", "ODY");
  }
}

module.exports = TimeStretch;
