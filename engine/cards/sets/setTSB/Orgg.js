"use strict";
const Constants = require ("../../../Constants");
const OrggBase = require("../setFEM/Orgg");

class Orgg extends OrggBase {
  constructor(game) {
    super(game, "Orgg", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Orgg;
