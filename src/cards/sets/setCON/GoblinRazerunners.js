"use strict";
const Constants = require ("../../../Constants");
const GoblinRazerunnersBase = require("../setBBD/GoblinRazerunners");

class GoblinRazerunners extends GoblinRazerunnersBase {
  constructor (game) {
    super(game, "Goblin Razerunners", "Conflux", "CON");
  }
}

module.exports = GoblinRazerunners;
