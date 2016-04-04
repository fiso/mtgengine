"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TimeStretchBase = require("../setODY/TimeStretch.js");

class TimeStretch extends TimeStretchBase {
  constructor(game) {
    super(game, "Time Stretch", "Tenth Edition", "10E");
  }
}

module.exports = TimeStretch;
