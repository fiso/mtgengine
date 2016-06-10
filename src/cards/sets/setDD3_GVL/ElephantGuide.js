"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElephantGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Elephant Guide", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = ElephantGuide;
