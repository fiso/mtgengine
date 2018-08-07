"use strict";
const Constants = require ("../../../Constants");
const ClockworkBeastBase = require("../setMED/ClockworkBeast");

class ClockworkBeast extends ClockworkBeastBase {
  constructor (game) {
    super(game, "Clockwork Beast", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = ClockworkBeast;
