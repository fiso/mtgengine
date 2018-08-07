"use strict";
const Constants = require ("../../../Constants");
const FarsightMaskBase = require("../setPCA/FarsightMask");

class FarsightMask extends FarsightMaskBase {
  constructor (game) {
    super(game, "Farsight Mask", "Planechase 2012", "PC2");
  }
}

module.exports = FarsightMask;
