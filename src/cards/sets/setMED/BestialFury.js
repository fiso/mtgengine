"use strict";
const Constants = require ("../../../Constants");
const BestialFuryBase = require("../setALL/BestialFury");

class BestialFury extends BestialFuryBase {
  constructor (game) {
    super(game, "Bestial Fury", "Masters Edition", "MED");
  }
}

module.exports = BestialFury;
