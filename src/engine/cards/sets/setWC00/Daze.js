"use strict";
const Constants = require ("../../../Constants");
const DazeBase = require("../setMP2/Daze");

class Daze extends DazeBase {
  constructor (game) {
    super(game, "Daze", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Daze;
