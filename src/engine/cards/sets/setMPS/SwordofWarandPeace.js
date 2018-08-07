"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwordofWarandPeace extends UnimplementedCard {
  constructor (game) {
    super(game, "Sword of War and Peace", "Kaladesh Inventions", "MPS");
  }
}

module.exports = SwordofWarandPeace;
