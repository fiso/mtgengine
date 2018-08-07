"use strict";
const Constants = require ("../../../Constants");
const SpiritMirrorBase = require("../setTPR/SpiritMirror");

class SpiritMirror extends SpiritMirrorBase {
  constructor (game) {
    super(game, "Spirit Mirror", "Vintage Masters", "VMA");
  }
}

module.exports = SpiritMirror;
