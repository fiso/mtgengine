"use strict";
const Constants = require ("../../../Constants");
const ClockworkBeastBase = require("../setMED/ClockworkBeast");

class ClockworkBeast extends ClockworkBeastBase {
  constructor (game) {
    super(game, "Clockwork Beast", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = ClockworkBeast;
