"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EssenceLeak extends UnimplementedCard {
  constructor(game) {
    super(game, "Essence Leak", "Invasion", "INV");
  }
}

module.exports = EssenceLeak;
