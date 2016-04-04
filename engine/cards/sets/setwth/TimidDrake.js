"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TimidDrakeBase = require("../setMMQ/TimidDrake.js");

class TimidDrake extends TimidDrakeBase {
  constructor(game) {
    super(game, "Timid Drake", "Weatherlight", "WTH");
  }
}

module.exports = TimidDrake;
