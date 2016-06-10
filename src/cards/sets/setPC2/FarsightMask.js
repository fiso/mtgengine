"use strict";
const Constants = require ("../../../Constants");
const FarsightMaskBase = require("../setMRD/FarsightMask");

class FarsightMask extends FarsightMaskBase {
  constructor (game) {
    super(game, "Farsight Mask", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = FarsightMask;
