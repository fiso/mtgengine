"use strict";
const Constants = require ("../../../Constants");
const AbundanceBase = require("../setC17/Abundance");

class Abundance extends AbundanceBase {
  constructor (game) {
    super(game, "Abundance", "Urza's Saga", "USG");
  }
}

module.exports = Abundance;
