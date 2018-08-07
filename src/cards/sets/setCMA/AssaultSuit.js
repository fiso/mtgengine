"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AssaultSuit extends UnimplementedCard {
  constructor (game) {
    super(game, "Assault Suit", "Commander Anthology", "CMA");
  }
}

module.exports = AssaultSuit;
