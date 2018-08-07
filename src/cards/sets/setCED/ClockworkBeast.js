"use strict";
const Constants = require ("../../../Constants");
const ClockworkBeastBase = require("../setMED/ClockworkBeast");

class ClockworkBeast extends ClockworkBeastBase {
  constructor (game) {
    super(game, "Clockwork Beast", "Collectors’ Edition", "CED");
  }
}

module.exports = ClockworkBeast;
