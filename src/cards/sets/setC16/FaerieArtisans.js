"use strict";
const Constants = require ("../../../Constants");
const FaerieArtisansBase = require("../setPZ2/FaerieArtisans");

class FaerieArtisans extends FaerieArtisansBase {
  constructor (game) {
    super(game, "Faerie Artisans", "Commander 2016", "C16");
  }
}

module.exports = FaerieArtisans;
