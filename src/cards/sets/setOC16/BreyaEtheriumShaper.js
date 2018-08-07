"use strict";
const Constants = require ("../../../Constants");
const BreyaEtheriumShaperBase = require("../setPZ2/BreyaEtheriumShaper");

class BreyaEtheriumShaper extends BreyaEtheriumShaperBase {
  constructor (game) {
    super(game, "Breya, Etherium Shaper", "Commander 2016 Oversized", "OC16");
  }
}

module.exports = BreyaEtheriumShaper;
