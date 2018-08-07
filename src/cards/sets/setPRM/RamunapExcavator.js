"use strict";
const Constants = require ("../../../Constants");
const RamunapExcavatorBase = require("../setHOU/RamunapExcavator");

class RamunapExcavator extends RamunapExcavatorBase {
  constructor (game) {
    super(game, "Ramunap Excavator", "Magic Online Promos", "PRM");
  }
}

module.exports = RamunapExcavator;
