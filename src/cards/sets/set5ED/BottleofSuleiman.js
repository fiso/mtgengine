"use strict";
const Constants = require ("../../../Constants");
const BottleofSuleimanBase = require("../setARN/BottleofSuleiman");

class BottleofSuleiman extends BottleofSuleimanBase {
  constructor(game) {
    super(game, "Bottle of Suleiman", "Fifth Edition", "5ED");
  }
}

module.exports = BottleofSuleiman;
