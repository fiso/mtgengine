"use strict";
const Constants = require ("../../../Constants");
const FireslingerBase = require("../setDD3_JVC/Fireslinger");

class Fireslinger extends FireslingerBase {
  constructor(game) {
    super(game, "Fireslinger", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Fireslinger;
