"use strict";
const Constants = require ("../../../Constants");
const ShamanicRevelationBase = require("../setFRF/ShamanicRevelation");

class ShamanicRevelation extends ShamanicRevelationBase {
  constructor (game) {
    super(game, "Shamanic Revelation", "Media Inserts", "pMEI");
  }
}

module.exports = ShamanicRevelation;
