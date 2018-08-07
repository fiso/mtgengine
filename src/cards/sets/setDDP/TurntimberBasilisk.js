"use strict";
const Constants = require ("../../../Constants");
const TurntimberBasiliskBase = require("../setE01/TurntimberBasilisk");

class TurntimberBasilisk extends TurntimberBasiliskBase {
  constructor (game) {
    super(game, "Turntimber Basilisk", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = TurntimberBasilisk;
