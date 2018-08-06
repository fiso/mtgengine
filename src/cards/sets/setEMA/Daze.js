"use strict";
const Constants = require ("../../../Constants");
const DazeBase = require("../setDD3_JVC/Daze");

class Daze extends DazeBase {
  constructor (game) {
    super(game, "Daze", "Eternal Masters", "EMA");
  }
}

module.exports = Daze;
