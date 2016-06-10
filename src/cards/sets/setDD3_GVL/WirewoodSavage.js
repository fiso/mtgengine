"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WirewoodSavage extends UnimplementedCard {
  constructor (game) {
    super(game, "Wirewood Savage", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = WirewoodSavage;
