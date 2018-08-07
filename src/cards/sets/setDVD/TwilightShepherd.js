"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwilightShepherd extends UnimplementedCard {
  constructor (game) {
    super(game, "Twilight Shepherd", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = TwilightShepherd;
