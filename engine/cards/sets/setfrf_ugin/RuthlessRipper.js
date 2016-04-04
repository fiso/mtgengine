"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RuthlessRipperBase = require("../setKTK/RuthlessRipper.js");

class RuthlessRipper extends RuthlessRipperBase {
  constructor(game) {
    super(game, "Ruthless Ripper", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = RuthlessRipper;
