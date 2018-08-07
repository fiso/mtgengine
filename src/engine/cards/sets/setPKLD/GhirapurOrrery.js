"use strict";
const Constants = require ("../../../Constants");
const GhirapurOrreryBase = require("../setKLD/GhirapurOrrery");

class GhirapurOrrery extends GhirapurOrreryBase {
  constructor (game) {
    super(game, "Ghirapur Orrery", "Kaladesh Promos", "PKLD");
  }
}

module.exports = GhirapurOrrery;
