"use strict";
const Constants = require ("../../../Constants");
const AntQueenBase = require("../setMM2/AntQueen");

class AntQueen extends AntQueenBase {
  constructor (game) {
    super(game, "Ant Queen", "Magic 2010 Promos", "PM10");
  }
}

module.exports = AntQueen;
