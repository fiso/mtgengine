"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VisceridDroneBase = require("../setALL/VisceridDrone.js");

class VisceridDrone extends VisceridDroneBase {
  constructor(game) {
    super(game, "Viscerid Drone", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = VisceridDrone;
