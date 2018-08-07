"use strict";
const Constants = require ("../../../Constants");
const BloomingMarshBase = require("../setKLD/BloomingMarsh");

class BloomingMarsh extends BloomingMarshBase {
  constructor (game) {
    super(game, "Blooming Marsh", "Kaladesh Promos", "PKLD");
  }
}

module.exports = BloomingMarsh;
