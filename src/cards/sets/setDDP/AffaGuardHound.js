"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AffaGuardHound extends UnimplementedCard {
  constructor (game) {
    super(game, "Affa Guard Hound", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = AffaGuardHound;
