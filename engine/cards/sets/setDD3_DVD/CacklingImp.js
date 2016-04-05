"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CacklingImp extends UnimplementedCard {
  constructor(game) {
    super(game, "Cackling Imp", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = CacklingImp;
