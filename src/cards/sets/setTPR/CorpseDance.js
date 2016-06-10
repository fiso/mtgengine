"use strict";
const Constants = require ("../../../Constants");
const CorpseDanceBase = require("../setTMP/CorpseDance");

class CorpseDance extends CorpseDanceBase {
  constructor (game) {
    super(game, "Corpse Dance", "Tempest Remastered", "TPR");
  }
}

module.exports = CorpseDance;
