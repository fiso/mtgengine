"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaVault extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Vault", "Collector's Edition", "CED");
  }
}

module.exports = ManaVault;
