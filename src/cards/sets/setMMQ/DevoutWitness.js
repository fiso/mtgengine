"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevoutWitness extends UnimplementedCard {
  constructor (game) {
    super(game, "Devout Witness", "Mercadian Masques", "MMQ");
  }
}

module.exports = DevoutWitness;
