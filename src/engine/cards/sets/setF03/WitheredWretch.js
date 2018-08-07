"use strict";
const Constants = require ("../../../Constants");
const WitheredWretchBase = require("../setHOP/WitheredWretch");

class WitheredWretch extends WitheredWretchBase {
  constructor (game) {
    super(game, "Withered Wretch", "Friday Night Magic 2003", "F03");
  }
}

module.exports = WitheredWretch;
