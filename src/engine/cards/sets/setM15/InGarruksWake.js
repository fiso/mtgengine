"use strict";
const Constants = require ("../../../Constants");
const InGarruksWakeBase = require("../setC16/InGarruksWake");

class InGarruksWake extends InGarruksWakeBase {
  constructor (game) {
    super(game, "In Garruk's Wake", "Magic 2015", "M15");
  }
}

module.exports = InGarruksWake;
