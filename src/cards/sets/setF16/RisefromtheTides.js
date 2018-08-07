"use strict";
const Constants = require ("../../../Constants");
const RisefromtheTidesBase = require("../setSOI/RisefromtheTides");

class RisefromtheTides extends RisefromtheTidesBase {
  constructor (game) {
    super(game, "Rise from the Tides", "Friday Night Magic 2016", "F16");
  }
}

module.exports = RisefromtheTides;
