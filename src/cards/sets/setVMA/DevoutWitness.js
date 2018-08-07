"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevoutWitness extends UnimplementedCard {
  constructor (game) {
    super(game, "Devout Witness", "Vintage Masters", "VMA");
  }
}

module.exports = DevoutWitness;
