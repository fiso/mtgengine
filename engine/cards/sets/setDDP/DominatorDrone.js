"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DominatorDroneBase = require("../setBFZ/DominatorDrone.js");

class DominatorDrone extends DominatorDroneBase {
  constructor(game) {
    super(game, "Dominator Drone", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = DominatorDrone;
