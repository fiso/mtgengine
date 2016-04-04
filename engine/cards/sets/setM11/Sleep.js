"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SleepBase = require("../setC15/Sleep.js");

class Sleep extends SleepBase {
  constructor(game) {
    super(game, "Sleep", "Magic 2011", "M11");
  }
}

module.exports = Sleep;
