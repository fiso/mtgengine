"use strict";
const Constants = require ("../../../Constants");
const SleepBase = require("../setM19/Sleep");

class Sleep extends SleepBase {
  constructor (game) {
    super(game, "Sleep", "Magic 2013", "M13");
  }
}

module.exports = Sleep;
