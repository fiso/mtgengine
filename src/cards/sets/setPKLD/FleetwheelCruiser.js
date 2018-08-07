"use strict";
const Constants = require ("../../../Constants");
const FleetwheelCruiserBase = require("../setKLD/FleetwheelCruiser");

class FleetwheelCruiser extends FleetwheelCruiserBase {
  constructor (game) {
    super(game, "Fleetwheel Cruiser", "Kaladesh Promos", "PKLD");
  }
}

module.exports = FleetwheelCruiser;
