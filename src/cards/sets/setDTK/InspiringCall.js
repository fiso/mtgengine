"use strict";
const Constants = require ("../../../Constants");
const InspiringCallBase = require("../setCM2/InspiringCall");

class InspiringCall extends InspiringCallBase {
  constructor (game) {
    super(game, "Inspiring Call", "Dragons of Tarkir", "DTK");
  }
}

module.exports = InspiringCall;
