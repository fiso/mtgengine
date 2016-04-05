"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StonefareCrocodile extends UnimplementedCard {
  constructor(game) {
    super(game, "Stonefare Crocodile", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = StonefareCrocodile;
