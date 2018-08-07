"use strict";
const Constants = require ("../../../Constants");
const DazeBase = require("../setMP2/Daze");

class Daze extends DazeBase {
  constructor (game) {
    super(game, "Daze", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Daze;
