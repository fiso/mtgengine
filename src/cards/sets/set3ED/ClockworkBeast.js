"use strict";
const Constants = require ("../../../Constants");
const ClockworkBeastBase = require("../setBTD/ClockworkBeast");

class ClockworkBeast extends ClockworkBeastBase {
  constructor (game) {
    super(game, "Clockwork Beast", "Revised Edition", "3ED");
  }
}

module.exports = ClockworkBeast;
