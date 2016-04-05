"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishOriflamme extends UnimplementedCard {
  constructor(game) {
    super(game, "Orcish Oriflamme", "Classic Sixth Edition", "6ED");
  }
}

module.exports = OrcishOriflamme;
