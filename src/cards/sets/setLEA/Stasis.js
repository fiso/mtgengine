"use strict";
const Constants = require ("../../../Constants");
const StasisBase = require("../setCED/Stasis");

class Stasis extends StasisBase {
  constructor (game) {
    super(game, "Stasis", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Stasis;
