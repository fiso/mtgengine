"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TetsuoUmezawaBase = require("../setLEG/TetsuoUmezawa.js");

class TetsuoUmezawa extends TetsuoUmezawaBase {
  constructor(game) {
    super(game, "Tetsuo Umezawa", "Masters Edition III", "ME3");
  }
}

module.exports = TetsuoUmezawa;
