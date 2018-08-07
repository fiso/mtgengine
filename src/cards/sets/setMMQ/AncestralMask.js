"use strict";
const Constants = require ("../../../Constants");
const AncestralMaskBase = require("../setEMA/AncestralMask");

class AncestralMask extends AncestralMaskBase {
  constructor (game) {
    super(game, "Ancestral Mask", "Mercadian Masques", "MMQ");
  }
}

module.exports = AncestralMask;
