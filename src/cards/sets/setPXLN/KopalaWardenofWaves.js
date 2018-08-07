"use strict";
const Constants = require ("../../../Constants");
const KopalaWardenofWavesBase = require("../setXLN/KopalaWardenofWaves");

class KopalaWardenofWaves extends KopalaWardenofWavesBase {
  constructor (game) {
    super(game, "Kopala, Warden of Waves", "Ixalan Promos", "PXLN");
  }
}

module.exports = KopalaWardenofWaves;
