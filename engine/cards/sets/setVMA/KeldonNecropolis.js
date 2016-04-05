"use strict";
const Constants = require ("../../../Constants");
const KeldonNecropolisBase = require("../setINV/KeldonNecropolis");

class KeldonNecropolis extends KeldonNecropolisBase {
  constructor(game) {
    super(game, "Keldon Necropolis", "Vintage Masters", "VMA");
  }
}

module.exports = KeldonNecropolis;
