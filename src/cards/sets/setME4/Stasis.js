"use strict";
const Constants = require ("../../../Constants");
const StasisBase = require("../setCED/Stasis");

class Stasis extends StasisBase {
  constructor (game) {
    super(game, "Stasis", "Masters Edition IV", "ME4");
  }
}

module.exports = Stasis;
