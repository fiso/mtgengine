"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BaskingRootwalla extends UnimplementedCard {
  constructor (game) {
    super(game, "Basking Rootwalla", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = BaskingRootwalla;
