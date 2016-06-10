"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaggerclawImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Daggerclaw Imp", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = DaggerclawImp;
