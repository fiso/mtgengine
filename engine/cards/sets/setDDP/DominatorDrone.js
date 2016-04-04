"use strict";
const Constants = require ("../../../Constants");
const DominatorDroneBase = require("../setBFZ/DominatorDrone");

class DominatorDrone extends DominatorDroneBase {
  constructor(game) {
    super(game, "Dominator Drone", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = DominatorDrone;
