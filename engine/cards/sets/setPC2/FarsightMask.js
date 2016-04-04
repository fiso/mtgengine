"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FarsightMaskBase = require("../setMRD/FarsightMask.js");

class FarsightMask extends FarsightMaskBase {
  constructor(game) {
    super(game, "Farsight Mask", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = FarsightMask;
