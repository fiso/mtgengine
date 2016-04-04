"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WoodfallPrimusBase = require("../setMMA/WoodfallPrimus.js");

class WoodfallPrimus extends WoodfallPrimusBase {
  constructor(game) {
    super(game, "Woodfall Primus", "Shadowmoor", "SHM");
  }
}

module.exports = WoodfallPrimus;
