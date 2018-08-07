"use strict";
const Constants = require ("../../../Constants");
const RorixBladewingBase = require("../setEMA/RorixBladewing");

class RorixBladewing extends RorixBladewingBase {
  constructor (game) {
    super(game, "Rorix Bladewing", "Planechase", "HOP");
  }
}

module.exports = RorixBladewing;
