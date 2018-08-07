"use strict";
const Constants = require ("../../../Constants");
const HornetQueenBase = require("../setM15/HornetQueen");

class HornetQueen extends HornetQueenBase {
  constructor (game) {
    super(game, "Hornet Queen", "Commander 2011", "CMD");
  }
}

module.exports = HornetQueen;
