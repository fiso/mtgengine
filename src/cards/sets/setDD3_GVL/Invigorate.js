"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Invigorate extends UnimplementedCard {
  constructor (game) {
    super(game, "Invigorate", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = Invigorate;
