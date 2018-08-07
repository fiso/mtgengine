"use strict";
const Constants = require ("../../../Constants");
const GoblinRazerunnersBase = require("../setBBD/GoblinRazerunners");

class GoblinRazerunners extends GoblinRazerunnersBase {
  constructor (game) {
    super(game, "Goblin Razerunners", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = GoblinRazerunners;
