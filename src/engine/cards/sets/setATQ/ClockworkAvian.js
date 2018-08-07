"use strict";
const Constants = require ("../../../Constants");
const ClockworkAvianBase = require("../setME4/ClockworkAvian");

class ClockworkAvian extends ClockworkAvianBase {
  constructor (game) {
    super(game, "Clockwork Avian", "Antiquities", "ATQ");
  }
}

module.exports = ClockworkAvian;
