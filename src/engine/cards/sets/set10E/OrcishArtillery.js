"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishArtillery extends UnimplementedCard {
  constructor (game) {
    super(game, "Orcish Artillery", "Tenth Edition", "10E");
  }
}

module.exports = OrcishArtillery;
