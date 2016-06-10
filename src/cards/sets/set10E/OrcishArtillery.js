"use strict";
const Constants = require ("../../../Constants");
const OrcishArtilleryBase = require("../set6ED/OrcishArtillery");

class OrcishArtillery extends OrcishArtilleryBase {
  constructor (game) {
    super(game, "Orcish Artillery", "Tenth Edition", "10E");
  }
}

module.exports = OrcishArtillery;
