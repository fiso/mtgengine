"use strict";
const Constants = require ("../../../Constants");
const ClockworkBeastBase = require("../setMED/ClockworkBeast");

class ClockworkBeast extends ClockworkBeastBase {
  constructor (game) {
    super(game, "Clockwork Beast", "Unlimited Edition", "2ED");
  }
}

module.exports = ClockworkBeast;
