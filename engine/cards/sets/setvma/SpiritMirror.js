"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpiritMirrorBase = require("../setTMP/SpiritMirror.js");

class SpiritMirror extends SpiritMirrorBase {
  constructor(game) {
    super(game, "Spirit Mirror", "Vintage Masters", "VMA");
  }
}

module.exports = SpiritMirror;
