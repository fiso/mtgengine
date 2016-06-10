"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuskImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Dusk Imp", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = DuskImp;
