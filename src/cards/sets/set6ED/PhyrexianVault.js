"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianVault extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Vault", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PhyrexianVault;
