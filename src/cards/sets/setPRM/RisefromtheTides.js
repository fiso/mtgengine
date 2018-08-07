"use strict";
const Constants = require ("../../../Constants");
const RisefromtheTidesBase = require("../setSOI/RisefromtheTides");

class RisefromtheTides extends RisefromtheTidesBase {
  constructor (game) {
    super(game, "Rise from the Tides", "Magic Online Promos", "PRM");
  }
}

module.exports = RisefromtheTides;
