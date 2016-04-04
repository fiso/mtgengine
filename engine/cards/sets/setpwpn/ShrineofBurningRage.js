"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShrineofBurningRageBase = require("../setNPH/ShrineofBurningRage.js");

class ShrineofBurningRage extends ShrineofBurningRageBase {
  constructor(game) {
    super(game, "Shrine of Burning Rage", "WPN and Gateway", "pWPN");
  }
}

module.exports = ShrineofBurningRage;
