"use strict";
const Constants = require ("../../../Constants");
const SoulfireGrandMasterBase = require("../setFRF/SoulfireGrandMaster");

class SoulfireGrandMaster extends SoulfireGrandMasterBase {
  constructor (game) {
    super(game, "Soulfire Grand Master", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = SoulfireGrandMaster;
