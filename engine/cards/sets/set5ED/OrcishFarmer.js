"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishFarmer extends UnimplementedCard {
  constructor(game) {
    super(game, "Orcish Farmer", "Fifth Edition", "5ED");
  }
}

module.exports = OrcishFarmer;
