"use strict";
const Constants = require ("../../../Constants");
const EraseBase = require("../setKTK/Erase");

class Erase extends EraseBase {
  constructor (game) {
    super(game, "Erase", "Magic 2013", "M13");
  }
}

module.exports = Erase;
