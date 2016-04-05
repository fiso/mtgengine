"use strict";
const Constants = require ("../../../Constants");
const CathedralSanctifierBase = require("../setAVR/CathedralSanctifier");

class CathedralSanctifier extends CathedralSanctifierBase {
  constructor(game) {
    super(game, "Cathedral Sanctifier", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = CathedralSanctifier;
