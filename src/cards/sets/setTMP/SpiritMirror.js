"use strict";
const Constants = require ("../../../Constants");
const SpiritMirrorBase = require("../setTPR/SpiritMirror");

class SpiritMirror extends SpiritMirrorBase {
  constructor (game) {
    super(game, "Spirit Mirror", "Tempest", "TMP");
  }
}

module.exports = SpiritMirror;
