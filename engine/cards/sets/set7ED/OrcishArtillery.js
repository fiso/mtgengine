"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrcishArtilleryBase = require("../set6ED/OrcishArtillery.js");

class OrcishArtillery extends OrcishArtilleryBase {
  constructor(game) {
    super(game, "Orcish Artillery", "Seventh Edition", "7ED");
  }
}

module.exports = OrcishArtillery;
