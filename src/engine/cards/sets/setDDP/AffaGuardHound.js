"use strict";
const Constants = require ("../../../Constants");
const AffaGuardHoundBase = require("../setCN2/AffaGuardHound");

class AffaGuardHound extends AffaGuardHoundBase {
  constructor (game) {
    super(game, "Affa Guard Hound", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = AffaGuardHound;
