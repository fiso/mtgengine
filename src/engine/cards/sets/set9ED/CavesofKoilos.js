"use strict";
const Constants = require ("../../../Constants");
const CavesofKoilosBase = require("../setC16/CavesofKoilos");

class CavesofKoilos extends CavesofKoilosBase {
  constructor (game) {
    super(game, "Caves of Koilos", "Ninth Edition", "9ED");
  }
}

module.exports = CavesofKoilos;
