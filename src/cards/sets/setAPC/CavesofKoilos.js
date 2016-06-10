"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CavesofKoilos extends UnimplementedCard {
  constructor (game) {
    super(game, "Caves of Koilos", "Apocalypse", "APC");
  }
}

module.exports = CavesofKoilos;
