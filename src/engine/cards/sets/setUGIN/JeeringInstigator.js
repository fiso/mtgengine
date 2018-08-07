"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JeeringInstigator extends UnimplementedCard {
  constructor (game) {
    super(game, "Jeering Instigator", "Ugin's Fate", "UGIN");
  }
}

module.exports = JeeringInstigator;
