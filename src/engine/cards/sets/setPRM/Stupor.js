"use strict";
const Constants = require ("../../../Constants");
const StuporBase = require("../setTSB/Stupor");

class Stupor extends StuporBase {
  constructor (game) {
    super(game, "Stupor", "Magic Online Promos", "PRM");
  }
}

module.exports = Stupor;
