"use strict";
const Constants = require ("../../../Constants");
const ClockworkBeastBase = require("../setMED/ClockworkBeast");

class ClockworkBeast extends ClockworkBeastBase {
  constructor (game) {
    super(game, "Clockwork Beast", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = ClockworkBeast;
