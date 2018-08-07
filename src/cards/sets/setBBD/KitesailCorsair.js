"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KitesailCorsair extends UnimplementedCard {
  constructor (game) {
    super(game, "Kitesail Corsair", "Battlebond", "BBD");
  }
}

module.exports = KitesailCorsair;
