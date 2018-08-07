"use strict";
const Constants = require ("../../../Constants");
const SealofRemovalBase = require("../setWC00/SealofRemoval");

class SealofRemoval extends SealofRemovalBase {
  constructor (game) {
    super(game, "Seal of Removal", "Nemesis", "NEM");
  }
}

module.exports = SealofRemoval;
