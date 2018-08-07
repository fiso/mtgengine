"use strict";
const Constants = require ("../../../Constants");
const CorpseDanceBase = require("../setTPR/CorpseDance");

class CorpseDance extends CorpseDanceBase {
  constructor (game) {
    super(game, "Corpse Dance", "Tempest", "TMP");
  }
}

module.exports = CorpseDance;
