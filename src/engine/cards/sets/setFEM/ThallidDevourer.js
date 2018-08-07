"use strict";
const Constants = require ("../../../Constants");
const ThallidDevourerBase = require("../setME2/ThallidDevourer");

class ThallidDevourer extends ThallidDevourerBase {
  constructor (game) {
    super(game, "Thallid Devourer", "Fallen Empires", "FEM");
  }
}

module.exports = ThallidDevourer;
