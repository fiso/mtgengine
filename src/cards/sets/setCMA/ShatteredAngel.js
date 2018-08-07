"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShatteredAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Shattered Angel", "Commander Anthology", "CMA");
  }
}

module.exports = ShatteredAngel;
