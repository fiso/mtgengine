"use strict";
const Constants = require ("../../../Constants");
const CorruptBase = require("../setDD3_DVD/Corrupt");

class Corrupt extends CorruptBase {
  constructor (game) {
    super(game, "Corrupt", "Shadowmoor", "SHM");
  }
}

module.exports = Corrupt;
