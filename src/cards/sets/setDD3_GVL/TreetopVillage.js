"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreetopVillage extends UnimplementedCard {
  constructor (game) {
    super(game, "Treetop Village", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = TreetopVillage;
