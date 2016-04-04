"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FleetfootPantherBase = require("../setDDH/FleetfootPanther.js");

class FleetfootPanther extends FleetfootPantherBase {
  constructor(game) {
    super(game, "Fleetfoot Panther", "Planeshift", "PLS");
  }
}

module.exports = FleetfootPanther;
