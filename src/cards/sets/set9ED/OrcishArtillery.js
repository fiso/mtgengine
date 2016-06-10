"use strict";
const Constants = require ("../../../Constants");
const OrcishArtilleryBase = require("../set6ED/OrcishArtillery");

class OrcishArtillery extends OrcishArtilleryBase {
  constructor (game) {
    super(game, "Orcish Artillery", "Ninth Edition", "9ED");
  }
}

module.exports = OrcishArtillery;
