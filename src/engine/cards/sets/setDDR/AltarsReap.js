"use strict";
const Constants = require ("../../../Constants");
const AltarsReapBase = require("../setMTGA/AltarsReap");

class AltarsReap extends AltarsReapBase {
  constructor (game) {
    super(game, "Altar's Reap", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = AltarsReap;
