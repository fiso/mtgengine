"use strict";
const Constants = require ("../../../Constants");
const NissasPilgrimageBase = require("../setC17/NissasPilgrimage");

class NissasPilgrimage extends NissasPilgrimageBase {
  constructor (game) {
    super(game, "Nissa's Pilgrimage", "Friday Night Magic 2016", "F16");
  }
}

module.exports = NissasPilgrimage;
