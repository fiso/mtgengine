"use strict";
const Constants = require ("../../../Constants");
const SleepBase = require("../setM19/Sleep");

class Sleep extends SleepBase {
  constructor (game) {
    super(game, "Sleep", "Commander 2015", "C15");
  }
}

module.exports = Sleep;
