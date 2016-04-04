"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShamanicRevelationBase = require("../setFRF/ShamanicRevelation.js");

class ShamanicRevelation extends ShamanicRevelationBase {
  constructor(game) {
    super(game, "Shamanic Revelation", "Media Inserts", "pMEI");
  }
}

module.exports = ShamanicRevelation;
