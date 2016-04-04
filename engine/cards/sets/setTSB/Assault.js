"use strict";
const Constants = require ("../../../Constants");
const AssaultBase = require("../setINV/Assault");

class Assault extends AssaultBase {
  constructor(game) {
    super(game, "Assault", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Assault;
