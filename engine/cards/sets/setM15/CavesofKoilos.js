"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CavesofKoilosBase = require("../setAPC/CavesofKoilos.js");

class CavesofKoilos extends CavesofKoilosBase {
  constructor(game) {
    super(game, "Caves of Koilos", "Magic 2015 Core Set", "M15");
  }
}

module.exports = CavesofKoilos;
