"use strict";
const Constants = require ("../../../Constants");
const InspiringCallBase = require("../setCM2/InspiringCall");

class InspiringCall extends InspiringCallBase {
  constructor (game) {
    super(game, "Inspiring Call", "Iconic Masters", "IMA");
  }
}

module.exports = InspiringCall;
