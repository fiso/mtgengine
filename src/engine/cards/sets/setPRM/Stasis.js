"use strict";
const Constants = require ("../../../Constants");
const StasisBase = require("../setME4/Stasis");

class Stasis extends StasisBase {
  constructor (game) {
    super(game, "Stasis", "Magic Online Promos", "PRM");
  }
}

module.exports = Stasis;
