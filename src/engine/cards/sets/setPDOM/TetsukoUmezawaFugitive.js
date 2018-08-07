"use strict";
const Constants = require ("../../../Constants");
const TetsukoUmezawaFugitiveBase = require("../setDOM/TetsukoUmezawaFugitive");

class TetsukoUmezawaFugitive extends TetsukoUmezawaFugitiveBase {
  constructor (game) {
    super(game, "Tetsuko Umezawa, Fugitive", "Dominaria Promos", "PDOM");
  }
}

module.exports = TetsukoUmezawaFugitive;
