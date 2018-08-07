"use strict";
const Constants = require ("../../../Constants");
const EraseBase = require("../setKTK/Erase");

class Erase extends EraseBase {
  constructor (game) {
    super(game, "Erase", "Urza's Legacy", "ULG");
  }
}

module.exports = Erase;
