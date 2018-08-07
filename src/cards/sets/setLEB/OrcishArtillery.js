"use strict";
const Constants = require ("../../../Constants");
const OrcishArtilleryBase = require("../set10E/OrcishArtillery");

class OrcishArtillery extends OrcishArtilleryBase {
  constructor (game) {
    super(game, "Orcish Artillery", "Limited Edition Beta", "LEB");
  }
}

module.exports = OrcishArtillery;
