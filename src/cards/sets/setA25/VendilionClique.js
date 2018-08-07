"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VendilionClique extends UnimplementedCard {
  constructor (game) {
    super(game, "Vendilion Clique", "Masters 25", "A25");
  }
}

module.exports = VendilionClique;
