"use strict";
const Constants = require ("../../../Constants");
const TetsuoUmezawaBase = require("../setME3/TetsuoUmezawa");

class TetsuoUmezawa extends TetsuoUmezawaBase {
  constructor (game) {
    super(game, "Tetsuo Umezawa", "Legends", "LEG");
  }
}

module.exports = TetsuoUmezawa;
