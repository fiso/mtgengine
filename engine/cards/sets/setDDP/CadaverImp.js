"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CadaverImp extends UnimplementedCard {
  constructor(game) {
    super(game, "Cadaver Imp", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = CadaverImp;
