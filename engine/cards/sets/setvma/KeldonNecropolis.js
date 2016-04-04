"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KeldonNecropolisBase = require("../setINV/KeldonNecropolis.js");

class KeldonNecropolis extends KeldonNecropolisBase {
  constructor(game) {
    super(game, "Keldon Necropolis", "Vintage Masters", "VMA");
  }
}

module.exports = KeldonNecropolis;
