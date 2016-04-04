"use strict";
const Constants = require ("../../../Constants");
const BottleofSuleimanBase = require("../setARN/BottleofSuleiman");

class BottleofSuleiman extends BottleofSuleimanBase {
  constructor(game) {
    super(game, "Bottle of Suleiman", "Fourth Edition", "4ED");
  }
}

module.exports = BottleofSuleiman;
