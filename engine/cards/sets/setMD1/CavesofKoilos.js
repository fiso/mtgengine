"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CavesofKoilosBase = require("../setAPC/CavesofKoilos.js");

class CavesofKoilos extends CavesofKoilosBase {
  constructor(game) {
    super(game, "Caves of Koilos", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = CavesofKoilos;
