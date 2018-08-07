"use strict";
const Constants = require ("../../../Constants");
const TilonallisSkinshifterBase = require("../setXLN/TilonallisSkinshifter");

class TilonallisSkinshifter extends TilonallisSkinshifterBase {
  constructor (game) {
    super(game, "Tilonalli's Skinshifter", "Ixalan Promos", "PXLN");
  }
}

module.exports = TilonallisSkinshifter;
