"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SleepBase = require("../setC15/Sleep.js");

class Sleep extends SleepBase {
  constructor(game) {
    super(game, "Sleep", "Magic 2010", "M10");
  }
}

module.exports = Sleep;
