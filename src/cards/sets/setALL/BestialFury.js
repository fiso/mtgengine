"use strict";
const Constants = require ("../../../Constants");
const BestialFuryBase = require("../setMED/BestialFury");

class BestialFury extends BestialFuryBase {
  constructor (game) {
    super(game, "Bestial Fury", "Alliances", "ALL");
  }
}

module.exports = BestialFury;
