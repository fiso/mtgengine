"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WitheredWretchBase = require("../setpFNM/WitheredWretch.js");

class WitheredWretch extends WitheredWretchBase {
  constructor(game) {
    super(game, "Withered Wretch", "Legions", "LGN");
  }
}

module.exports = WitheredWretch;
