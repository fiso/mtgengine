"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianVault extends Card {
  constructor(game) {
    super(game, "Phyrexian Vault", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PhyrexianVault;
