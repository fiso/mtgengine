"use strict";
const Constants = require ("../../../Constants");
const WitheredWretchBase = require("../setpFNM/WitheredWretch");

class WitheredWretch extends WitheredWretchBase {
  constructor (game) {
    super(game, "Withered Wretch", "Legions", "LGN");
  }
}

module.exports = WitheredWretch;
