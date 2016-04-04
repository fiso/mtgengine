"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrcishArtillery extends Card {
  constructor(game) {
    super(game, "Orcish Artillery", "Classic Sixth Edition", "6ED");
  }
}

module.exports = OrcishArtillery;
