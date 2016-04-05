"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnuffOut extends UnimplementedCard {
  constructor(game) {
    super(game, "Snuff Out", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = SnuffOut;
