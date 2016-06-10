"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EternalWitness extends UnimplementedCard {
  constructor (game) {
    super(game, "Eternal Witness", "Commander 2015", "C15");
  }
}

module.exports = EternalWitness;
