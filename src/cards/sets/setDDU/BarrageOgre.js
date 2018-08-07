"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarrageOgre extends UnimplementedCard {
  constructor (game) {
    super(game, "Barrage Ogre", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = BarrageOgre;
