"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishArtillery extends UnimplementedCard {
  constructor(game) {
    super(game, "Orcish Artillery", "Classic Sixth Edition", "6ED");
  }
}

module.exports = OrcishArtillery;
