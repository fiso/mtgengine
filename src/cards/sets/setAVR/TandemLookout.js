"use strict";
const Constants = require ("../../../Constants");
const TandemLookoutBase = require("../setMM3/TandemLookout");

class TandemLookout extends TandemLookoutBase {
  constructor (game) {
    super(game, "Tandem Lookout", "Avacyn Restored", "AVR");
  }
}

module.exports = TandemLookout;
