"use strict";
const Constants = require ("../../../Constants");
const FleetfootPantherBase = require("../setDDH/FleetfootPanther");

class FleetfootPanther extends FleetfootPantherBase {
  constructor(game) {
    super(game, "Fleetfoot Panther", "Planeshift", "PLS");
  }
}

module.exports = FleetfootPanther;
