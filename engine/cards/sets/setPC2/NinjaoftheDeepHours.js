"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NinjaoftheDeepHoursBase = require("../setBOK/NinjaoftheDeepHours.js");

class NinjaoftheDeepHours extends NinjaoftheDeepHoursBase {
  constructor(game) {
    super(game, "Ninja of the Deep Hours", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = NinjaoftheDeepHours;
