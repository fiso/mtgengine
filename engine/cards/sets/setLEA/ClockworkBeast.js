"use strict";
const Constants = require ("../../../Constants");
const ClockworkBeastBase = require("../setBTD/ClockworkBeast");

class ClockworkBeast extends ClockworkBeastBase {
  constructor(game) {
    super(game, "Clockwork Beast", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ClockworkBeast;
