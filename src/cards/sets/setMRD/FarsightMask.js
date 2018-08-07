"use strict";
const Constants = require ("../../../Constants");
const FarsightMaskBase = require("../setPCA/FarsightMask");

class FarsightMask extends FarsightMaskBase {
  constructor (game) {
    super(game, "Farsight Mask", "Mirrodin", "MRD");
  }
}

module.exports = FarsightMask;
