"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodElves extends UnimplementedCard {
  constructor (game) {
    super(game, "Wood Elves", "Commander Anthology", "CMA");
  }
}

module.exports = WoodElves;
