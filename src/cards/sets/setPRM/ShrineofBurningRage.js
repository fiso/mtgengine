"use strict";
const Constants = require ("../../../Constants");
const ShrineofBurningRageBase = require("../setNPH/ShrineofBurningRage");

class ShrineofBurningRage extends ShrineofBurningRageBase {
  constructor (game) {
    super(game, "Shrine of Burning Rage", "Magic Online Promos", "PRM");
  }
}

module.exports = ShrineofBurningRage;
