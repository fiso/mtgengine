"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrcishFarmer extends Card {
  constructor(game) {
    super(game, "Orcish Farmer", "Fifth Edition", "5ED");
  }
}

module.exports = OrcishFarmer;
