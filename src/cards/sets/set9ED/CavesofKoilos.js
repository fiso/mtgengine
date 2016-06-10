"use strict";
const Constants = require ("../../../Constants");
const CavesofKoilosBase = require("../setAPC/CavesofKoilos");

class CavesofKoilos extends CavesofKoilosBase {
  constructor (game) {
    super(game, "Caves of Koilos", "Ninth Edition", "9ED");
  }
}

module.exports = CavesofKoilos;
