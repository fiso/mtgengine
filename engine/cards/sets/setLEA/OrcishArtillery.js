"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrcishArtilleryBase = require("../set6ED/OrcishArtillery.js");

class OrcishArtillery extends OrcishArtilleryBase {
  constructor(game) {
    super(game, "Orcish Artillery", "Limited Edition Alpha", "LEA");
  }
}

module.exports = OrcishArtillery;
