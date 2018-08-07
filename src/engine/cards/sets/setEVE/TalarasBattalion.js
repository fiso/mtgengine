"use strict";
const Constants = require ("../../../Constants");
const TalarasBattalionBase = require("../setDDU/TalarasBattalion");

class TalarasBattalion extends TalarasBattalionBase {
  constructor (game) {
    super(game, "Talara's Battalion", "Eventide", "EVE");
  }
}

module.exports = TalarasBattalion;
