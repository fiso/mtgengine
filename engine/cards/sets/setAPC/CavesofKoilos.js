"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CavesofKoilos extends Card {
  constructor(game) {
    super(game, "Caves of Koilos", "Apocalypse", "APC");
  }
}

module.exports = CavesofKoilos;
