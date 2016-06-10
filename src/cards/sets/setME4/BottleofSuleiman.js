"use strict";
const Constants = require ("../../../Constants");
const BottleofSuleimanBase = require("../setARN/BottleofSuleiman");

class BottleofSuleiman extends BottleofSuleimanBase {
  constructor (game) {
    super(game, "Bottle of Suleiman", "Masters Edition IV", "ME4");
  }
}

module.exports = BottleofSuleiman;
