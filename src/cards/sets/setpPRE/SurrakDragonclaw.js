"use strict";
const Constants = require ("../../../Constants");
const SurrakDragonclawBase = require("../setKTK/SurrakDragonclaw");

class SurrakDragonclaw extends SurrakDragonclawBase {
  constructor (game) {
    super(game, "Surrak Dragonclaw", "Prerelease Events", "pPRE");
  }
}

module.exports = SurrakDragonclaw;
