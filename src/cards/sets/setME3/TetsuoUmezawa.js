"use strict";
const Constants = require ("../../../Constants");
const TetsuoUmezawaBase = require("../setLEG/TetsuoUmezawa");

class TetsuoUmezawa extends TetsuoUmezawaBase {
  constructor (game) {
    super(game, "Tetsuo Umezawa", "Masters Edition III", "ME3");
  }
}

module.exports = TetsuoUmezawa;
