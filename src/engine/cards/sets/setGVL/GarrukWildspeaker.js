"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GarrukWildspeaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Garruk Wildspeaker", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = GarrukWildspeaker;
