"use strict";
const Constants = require ("../../../Constants");
const RorixBladewingBase = require("../setONS/RorixBladewing");

class RorixBladewing extends RorixBladewingBase {
  constructor (game) {
    super(game, "Rorix Bladewing", "Vintage Masters", "VMA");
  }
}

module.exports = RorixBladewing;
