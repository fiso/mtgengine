"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraveSifter extends UnimplementedCard {
  constructor (game) {
    super(game, "Grave Sifter", "Commander Anthology", "CMA");
  }
}

module.exports = GraveSifter;
