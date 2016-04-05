"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulBurn extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul Burn", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = SoulBurn;
