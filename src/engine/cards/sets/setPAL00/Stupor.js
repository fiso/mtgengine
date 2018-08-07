"use strict";
const Constants = require ("../../../Constants");
const StuporBase = require("../setTSB/Stupor");

class Stupor extends StuporBase {
  constructor (game) {
    super(game, "Stupor", "Arena League 2000", "PAL00");
  }
}

module.exports = Stupor;
