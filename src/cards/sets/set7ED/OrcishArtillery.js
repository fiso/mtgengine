"use strict";
const Constants = require ("../../../Constants");
const OrcishArtilleryBase = require("../set6ED/OrcishArtillery");

class OrcishArtillery extends OrcishArtilleryBase {
  constructor (game) {
    super(game, "Orcish Artillery", "Seventh Edition", "7ED");
  }
}

module.exports = OrcishArtillery;
