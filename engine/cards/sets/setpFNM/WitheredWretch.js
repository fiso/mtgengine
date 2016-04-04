"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WitheredWretch extends Card {
  constructor(game) {
    super(game, "Withered Wretch", "Friday Night Magic", "pFNM");
  }
}

module.exports = WitheredWretch;
