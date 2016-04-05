"use strict";
const Constants = require ("../../../Constants");
const ClockworkAvianBase = require("../setATQ/ClockworkAvian");

class ClockworkAvian extends ClockworkAvianBase {
  constructor(game) {
    super(game, "Clockwork Avian", "Beatdown Box Set", "BTD");
  }
}

module.exports = ClockworkAvian;
