"use strict";
const Constants = require ("../../../Constants");
const CrashingBoarsBase = require("../setTPR/CrashingBoars");

class CrashingBoars extends CrashingBoarsBase {
  constructor (game) {
    super(game, "Crashing Boars", "Exodus", "EXO");
  }
}

module.exports = CrashingBoars;
