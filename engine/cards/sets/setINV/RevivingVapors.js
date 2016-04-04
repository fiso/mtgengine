"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RevivingVapors extends UnimplementedCard {
  constructor(game) {
    super(game, "Reviving Vapors", "Invasion", "INV");
  }
}

module.exports = RevivingVapors;
