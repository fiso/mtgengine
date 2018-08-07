"use strict";
const Constants = require ("../../../Constants");
const ClockofOmensBase = require("../setM13/ClockofOmens");

class ClockofOmens extends ClockofOmensBase {
  constructor (game) {
    super(game, "Clock of Omens", "Fifth Dawn", "5DN");
  }
}

module.exports = ClockofOmens;
