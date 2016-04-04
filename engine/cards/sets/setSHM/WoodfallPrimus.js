"use strict";
const Constants = require ("../../../Constants");
const WoodfallPrimusBase = require("../setMMA/WoodfallPrimus");

class WoodfallPrimus extends WoodfallPrimusBase {
  constructor(game) {
    super(game, "Woodfall Primus", "Shadowmoor", "SHM");
  }
}

module.exports = WoodfallPrimus;
