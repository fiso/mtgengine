"use strict";
const Constants = require ("../../../Constants");
const TimeDistortionBase = require("../setPCA/TimeDistortion");

class TimeDistortion extends TimeDistortionBase {
  constructor (game) {
    super(game, "Time Distortion", "Planechase 2012", "PC2");
  }
}

module.exports = TimeDistortion;
