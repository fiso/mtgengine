"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SootImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Soot Imp", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = SootImp;
