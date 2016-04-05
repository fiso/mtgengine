"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurntimberBasilisk extends UnimplementedCard {
  constructor(game) {
    super(game, "Turntimber Basilisk", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = TurntimberBasilisk;
