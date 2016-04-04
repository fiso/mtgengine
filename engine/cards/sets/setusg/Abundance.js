"use strict";
const Constants = require ("../../../Constants");
const AbundanceBase = require("../set10E/Abundance");

class Abundance extends AbundanceBase {
  constructor(game) {
    super(game, "Abundance", "Urza's Saga", "USG");
  }
}

module.exports = Abundance;
