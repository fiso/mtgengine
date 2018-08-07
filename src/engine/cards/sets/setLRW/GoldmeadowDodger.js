"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoldmeadowDodger extends UnimplementedCard {
  constructor (game) {
    super(game, "Goldmeadow Dodger", "Lorwyn", "LRW");
  }
}

module.exports = GoldmeadowDodger;
