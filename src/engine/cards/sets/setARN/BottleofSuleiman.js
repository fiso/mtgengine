"use strict";
const Constants = require ("../../../Constants");
const BottleofSuleimanBase = require("../setME4/BottleofSuleiman");

class BottleofSuleiman extends BottleofSuleimanBase {
  constructor (game) {
    super(game, "Bottle of Suleiman", "Arabian Nights", "ARN");
  }
}

module.exports = BottleofSuleiman;
