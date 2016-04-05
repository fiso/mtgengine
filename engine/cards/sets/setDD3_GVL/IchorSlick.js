"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IchorSlick extends UnimplementedCard {
  constructor(game) {
    super(game, "Ichor Slick", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = IchorSlick;
