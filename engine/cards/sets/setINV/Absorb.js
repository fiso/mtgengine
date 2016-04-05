"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Absorb extends UnimplementedCard {
  constructor(game) {
    super(game, "Absorb", "Invasion", "INV");
  }
}

module.exports = Absorb;
