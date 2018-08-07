"use strict";
const Constants = require ("../../../Constants");
const TidalCourierBase = require("../setDDT/TidalCourier");

class TidalCourier extends TidalCourierBase {
  constructor (game) {
    super(game, "Tidal Courier", "You Make the Cube", "PZ2");
  }
}

module.exports = TidalCourier;
