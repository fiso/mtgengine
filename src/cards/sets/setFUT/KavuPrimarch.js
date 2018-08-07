"use strict";
const Constants = require ("../../../Constants");
const KavuPrimarchBase = require("../setMM2/KavuPrimarch");

class KavuPrimarch extends KavuPrimarchBase {
  constructor (game) {
    super(game, "Kavu Primarch", "Future Sight", "FUT");
  }
}

module.exports = KavuPrimarch;
