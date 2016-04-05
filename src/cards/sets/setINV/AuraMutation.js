"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuraMutation extends UnimplementedCard {
  constructor(game) {
    super(game, "Aura Mutation", "Invasion", "INV");
  }
}

module.exports = AuraMutation;
