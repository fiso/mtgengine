"use strict";
const Constants = require ("../../../Constants");
const CapturedbytheConsulateBase = require("../setKLD/CapturedbytheConsulate");

class CapturedbytheConsulate extends CapturedbytheConsulateBase {
  constructor (game) {
    super(game, "Captured by the Consulate", "Kaladesh Promos", "PKLD");
  }
}

module.exports = CapturedbytheConsulate;
