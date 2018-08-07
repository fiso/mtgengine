"use strict";
const Constants = require ("../../../Constants");
const FeldonsCaneBase = require("../setTSB/FeldonsCane");

class FeldonsCane extends FeldonsCaneBase {
  constructor (game) {
    super(game, "Feldon's Cane", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = FeldonsCane;
