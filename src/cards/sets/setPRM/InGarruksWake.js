"use strict";
const Constants = require ("../../../Constants");
const InGarruksWakeBase = require("../setC16/InGarruksWake");

class InGarruksWake extends InGarruksWakeBase {
  constructor (game) {
    super(game, "In Garruk's Wake", "Magic Online Promos", "PRM");
  }
}

module.exports = InGarruksWake;
