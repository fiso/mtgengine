"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SecretSalvage extends UnimplementedCard {
  constructor (game) {
    super(game, "Secret Salvage", "Aether Revolt", "AER");
  }
}

module.exports = SecretSalvage;
