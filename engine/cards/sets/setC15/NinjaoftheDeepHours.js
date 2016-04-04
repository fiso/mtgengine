"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NinjaoftheDeepHoursBase = require("../setBOK/NinjaoftheDeepHours.js");

class NinjaoftheDeepHours extends NinjaoftheDeepHoursBase {
  constructor(game) {
    super(game, "Ninja of the Deep Hours", "Commander 2015", "C15");
  }
}

module.exports = NinjaoftheDeepHours;
