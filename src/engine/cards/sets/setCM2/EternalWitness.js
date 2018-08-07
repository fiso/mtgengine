"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EternalWitness extends UnimplementedCard {
  constructor (game) {
    super(game, "Eternal Witness", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = EternalWitness;
