"use strict";
const Constants = require ("../../../Constants");
const ClockworkAvianBase = require("../setATQ/ClockworkAvian");

class ClockworkAvian extends ClockworkAvianBase {
  constructor (game) {
    super(game, "Clockwork Avian", "Fourth Edition", "4ED");
  }
}

module.exports = ClockworkAvian;
