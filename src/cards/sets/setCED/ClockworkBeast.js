"use strict";
const Constants = require ("../../../Constants");
const ClockworkBeastBase = require("../setBTD/ClockworkBeast");

class ClockworkBeast extends ClockworkBeastBase {
  constructor (game) {
    super(game, "Clockwork Beast", "Collector's Edition", "CED");
  }
}

module.exports = ClockworkBeast;
