"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FreshMeat extends UnimplementedCard {
  constructor (game) {
    super(game, "Fresh Meat", "Commander Anthology", "CMA");
  }
}

module.exports = FreshMeat;
