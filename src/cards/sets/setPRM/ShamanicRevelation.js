"use strict";
const Constants = require ("../../../Constants");
const ShamanicRevelationBase = require("../setC16/ShamanicRevelation");

class ShamanicRevelation extends ShamanicRevelationBase {
  constructor (game) {
    super(game, "Shamanic Revelation", "Magic Online Promos", "PRM");
  }
}

module.exports = ShamanicRevelation;
