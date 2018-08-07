"use strict";
const Constants = require ("../../../Constants");
const KeldonNecropolisBase = require("../setVMA/KeldonNecropolis");

class KeldonNecropolis extends KeldonNecropolisBase {
  constructor (game) {
    super(game, "Keldon Necropolis", "Invasion", "INV");
  }
}

module.exports = KeldonNecropolis;
