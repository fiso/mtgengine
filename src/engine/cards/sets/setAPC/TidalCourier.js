"use strict";
const Constants = require ("../../../Constants");
const TidalCourierBase = require("../setDDT/TidalCourier");

class TidalCourier extends TidalCourierBase {
  constructor (game) {
    super(game, "Tidal Courier", "Apocalypse", "APC");
  }
}

module.exports = TidalCourier;
