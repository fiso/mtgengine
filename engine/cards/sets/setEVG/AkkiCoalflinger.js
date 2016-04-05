"use strict";
const Constants = require ("../../../Constants");
const AkkiCoalflingerBase = require("../setCHK/AkkiCoalflinger");

class AkkiCoalflinger extends AkkiCoalflingerBase {
  constructor(game) {
    super(game, "Akki Coalflinger", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = AkkiCoalflinger;
