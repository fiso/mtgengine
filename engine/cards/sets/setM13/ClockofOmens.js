"use strict";
const Constants = require ("../../../Constants");
const ClockofOmensBase = require("../set5DN/ClockofOmens");

class ClockofOmens extends ClockofOmensBase {
  constructor(game) {
    super(game, "Clock of Omens", "Magic 2013", "M13");
  }
}

module.exports = ClockofOmens;
