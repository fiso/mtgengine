"use strict";
const Constants = require ("../../../Constants");
const NissasPilgrimageBase = require("../setC17/NissasPilgrimage");

class NissasPilgrimage extends NissasPilgrimageBase {
  constructor (game) {
    super(game, "Nissa's Pilgrimage", "Magic Online Promos", "PRM");
  }
}

module.exports = NissasPilgrimage;
