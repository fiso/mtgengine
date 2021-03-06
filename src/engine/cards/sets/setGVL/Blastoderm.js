"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blastoderm extends UnimplementedCard {
  constructor (game) {
    super(game, "Blastoderm", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = Blastoderm;
