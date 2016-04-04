"use strict";
const Constants = require ("../../../Constants");
const AkkiCoalflingerBase = require("../setCHK/AkkiCoalflinger");

class AkkiCoalflinger extends AkkiCoalflingerBase {
  constructor(game) {
    super(game, "Akki Coalflinger", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = AkkiCoalflinger;
