"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranRoyalGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Kjeldoran Royal Guard", "Classic Sixth Edition", "6ED");
  }
}

module.exports = KjeldoranRoyalGuard;
