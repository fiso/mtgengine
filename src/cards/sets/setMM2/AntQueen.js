"use strict";
const Constants = require ("../../../Constants");
const AntQueenBase = require("../setpLPA/AntQueen");

class AntQueen extends AntQueenBase {
  constructor (game) {
    super(game, "Ant Queen", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = AntQueen;
