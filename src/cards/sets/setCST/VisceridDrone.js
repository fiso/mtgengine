"use strict";
const Constants = require ("../../../Constants");
const VisceridDroneBase = require("../setALL/VisceridDrone");

class VisceridDrone extends VisceridDroneBase {
  constructor (game) {
    super(game, "Viscerid Drone", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = VisceridDrone;
