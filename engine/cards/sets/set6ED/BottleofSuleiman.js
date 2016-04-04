"use strict";
const Constants = require ("../../../Constants");
const BottleofSuleimanBase = require("../setARN/BottleofSuleiman");

class BottleofSuleiman extends BottleofSuleimanBase {
  constructor(game) {
    super(game, "Bottle of Suleiman", "Classic Sixth Edition", "6ED");
  }
}

module.exports = BottleofSuleiman;
