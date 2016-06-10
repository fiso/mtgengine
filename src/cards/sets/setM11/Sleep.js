"use strict";
const Constants = require ("../../../Constants");
const SleepBase = require("../setC15/Sleep");

class Sleep extends SleepBase {
  constructor (game) {
    super(game, "Sleep", "Magic 2011", "M11");
  }
}

module.exports = Sleep;
