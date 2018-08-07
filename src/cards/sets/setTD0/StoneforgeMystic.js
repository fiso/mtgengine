"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneforgeMystic extends UnimplementedCard {
  constructor (game) {
    super(game, "Stoneforge Mystic", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = StoneforgeMystic;
