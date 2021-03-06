"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeeningBanshee extends UnimplementedCard {
  constructor (game) {
    super(game, "Keening Banshee", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = KeeningBanshee;
