"use strict";
const Constants = require ("../../../Constants");
const VisceridDroneBase = require("../setME2/VisceridDrone");

class VisceridDrone extends VisceridDroneBase {
  constructor (game) {
    super(game, "Viscerid Drone", "Alliances", "ALL");
  }
}

module.exports = VisceridDrone;
