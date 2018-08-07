"use strict";
const Constants = require ("../../../Constants");
const VonaButcherofMaganBase = require("../setXLN/VonaButcherofMagan");

class VonaButcherofMagan extends VonaButcherofMaganBase {
  constructor (game) {
    super(game, "Vona, Butcher of Magan", "Ixalan Promos", "PXLN");
  }
}

module.exports = VonaButcherofMagan;
