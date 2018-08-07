"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RevivingVapors extends UnimplementedCard {
  constructor (game) {
    super(game, "Reviving Vapors", "Vintage Masters", "VMA");
  }
}

module.exports = RevivingVapors;
