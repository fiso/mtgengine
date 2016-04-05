"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenalishTrapper extends UnimplementedCard {
  constructor(game) {
    super(game, "Benalish Trapper", "Invasion", "INV");
  }
}

module.exports = BenalishTrapper;
