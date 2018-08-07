"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntingTriad extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunting Triad", "Commander Anthology", "CMA");
  }
}

module.exports = HuntingTriad;
