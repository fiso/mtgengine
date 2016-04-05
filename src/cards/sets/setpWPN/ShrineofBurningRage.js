"use strict";
const Constants = require ("../../../Constants");
const ShrineofBurningRageBase = require("../setNPH/ShrineofBurningRage");

class ShrineofBurningRage extends ShrineofBurningRageBase {
  constructor(game) {
    super(game, "Shrine of Burning Rage", "WPN and Gateway", "pWPN");
  }
}

module.exports = ShrineofBurningRage;
