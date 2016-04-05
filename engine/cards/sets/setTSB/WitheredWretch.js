"use strict";
const Constants = require ("../../../Constants");
const WitheredWretchBase = require("../setpFNM/WitheredWretch");

class WitheredWretch extends WitheredWretchBase {
  constructor(game) {
    super(game, "Withered Wretch", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = WitheredWretch;
