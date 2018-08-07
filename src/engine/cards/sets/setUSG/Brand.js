"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Brand extends UnimplementedCard {
  constructor (game) {
    super(game, "Brand", "Urza's Saga", "USG");
  }
}

module.exports = Brand;
