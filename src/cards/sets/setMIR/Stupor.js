"use strict";
const Constants = require ("../../../Constants");
const StuporBase = require("../setpARL/Stupor");

class Stupor extends StuporBase {
  constructor (game) {
    super(game, "Stupor", "Mirage", "MIR");
  }
}

module.exports = Stupor;
