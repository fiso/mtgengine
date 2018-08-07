"use strict";
const Constants = require ("../../../Constants");
const MiraculousRecoveryBase = require("../setDDL/MiraculousRecovery");

class MiraculousRecovery extends MiraculousRecoveryBase {
  constructor (game) {
    super(game, "Miraculous Recovery", "Visions", "VIS");
  }
}

module.exports = MiraculousRecovery;
