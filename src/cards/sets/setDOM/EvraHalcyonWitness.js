"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EvraHalcyonWitness extends UnimplementedCard {
  constructor (game) {
    super(game, "Evra, Halcyon Witness", "Dominaria", "DOM");
  }
}

module.exports = EvraHalcyonWitness;
