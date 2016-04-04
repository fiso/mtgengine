"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurntimberGrove extends UnimplementedCard {
  constructor(game) {
    super(game, "Turntimber Grove", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = TurntimberGrove;
