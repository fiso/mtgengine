"use strict";
const Constants = require ("../../../Constants");
const MavrenFeinDuskApostleBase = require("../setXLN/MavrenFeinDuskApostle");

class MavrenFeinDuskApostle extends MavrenFeinDuskApostleBase {
  constructor (game) {
    super(game, "Mavren Fein, Dusk Apostle", "Ixalan Promos", "PXLN");
  }
}

module.exports = MavrenFeinDuskApostle;
