"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelofDespair extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel of Despair", "Commander Anthology", "CMA");
  }
}

module.exports = AngelofDespair;
