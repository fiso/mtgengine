"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KitchenFinks extends UnimplementedCard {
  constructor (game) {
    super(game, "Kitchen Finks", "Modern Masters", "MMA");
  }
}

module.exports = KitchenFinks;
