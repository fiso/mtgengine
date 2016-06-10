"use strict";
const Constants = require ("../../../Constants");
const ClockworkBeastBase = require("../setBTD/ClockworkBeast");

class ClockworkBeast extends ClockworkBeastBase {
  constructor (game) {
    super(game, "Clockwork Beast", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = ClockworkBeast;
