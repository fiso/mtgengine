"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VendilionClique extends UnimplementedCard {
  constructor(game) {
    super(game, "Vendilion Clique", "Judge Gift Program", "pJGP");
  }
}

module.exports = VendilionClique;
