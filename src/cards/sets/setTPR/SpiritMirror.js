"use strict";
const Constants = require ("../../../Constants");
const SpiritMirrorBase = require("../setTMP/SpiritMirror");

class SpiritMirror extends SpiritMirrorBase {
  constructor (game) {
    super(game, "Spirit Mirror", "Tempest Remastered", "TPR");
  }
}

module.exports = SpiritMirror;
