"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishCannoneers extends UnimplementedCard {
  constructor (game) {
    super(game, "Orcish Cannoneers", "Deckmasters", "DKM");
  }
}

module.exports = OrcishCannoneers;
