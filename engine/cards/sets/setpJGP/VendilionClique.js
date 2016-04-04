"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VendilionClique extends Card {
  constructor(game) {
    super(game, "Vendilion Clique", "Judge Gift Program", "pJGP");
  }
}

module.exports = VendilionClique;
