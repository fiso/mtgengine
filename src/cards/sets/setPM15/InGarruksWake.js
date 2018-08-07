"use strict";
const Constants = require ("../../../Constants");
const InGarruksWakeBase = require("../setC16/InGarruksWake");

class InGarruksWake extends InGarruksWakeBase {
  constructor (game) {
    super(game, "In Garruk's Wake", "Magic 2015 Promos", "PM15");
  }
}

module.exports = InGarruksWake;
