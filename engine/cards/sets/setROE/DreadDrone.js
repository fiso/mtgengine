"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreadDroneBase = require("../setMM2/DreadDrone.js");

class DreadDrone extends DreadDroneBase {
  constructor(game) {
    super(game, "Dread Drone", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DreadDrone;
