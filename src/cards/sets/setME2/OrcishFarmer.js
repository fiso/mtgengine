"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishFarmer extends UnimplementedCard {
  constructor (game) {
    super(game, "Orcish Farmer", "Masters Edition II", "ME2");
  }
}

module.exports = OrcishFarmer;
