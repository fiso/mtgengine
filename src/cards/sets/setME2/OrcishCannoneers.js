"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishCannoneers extends UnimplementedCard {
  constructor (game) {
    super(game, "Orcish Cannoneers", "Masters Edition II", "ME2");
  }
}

module.exports = OrcishCannoneers;
