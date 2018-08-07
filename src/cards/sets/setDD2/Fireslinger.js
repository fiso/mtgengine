"use strict";
const Constants = require ("../../../Constants");
const FireslingerBase = require("../setJVC/Fireslinger");

class Fireslinger extends FireslingerBase {
  constructor (game) {
    super(game, "Fireslinger", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Fireslinger;
