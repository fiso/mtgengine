"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SurrakDragonclawBase = require("../setKTK/SurrakDragonclaw.js");

class SurrakDragonclaw extends SurrakDragonclawBase {
  constructor(game) {
    super(game, "Surrak Dragonclaw", "Prerelease Events", "pPRE");
  }
}

module.exports = SurrakDragonclaw;
