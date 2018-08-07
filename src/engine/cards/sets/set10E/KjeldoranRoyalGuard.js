"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranRoyalGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Kjeldoran Royal Guard", "Tenth Edition", "10E");
  }
}

module.exports = KjeldoranRoyalGuard;
