"use strict";
const Constants = require ("../../../Constants");
const AkkiCoalflingerBase = require("../setEVG/AkkiCoalflinger");

class AkkiCoalflinger extends AkkiCoalflingerBase {
  constructor (game) {
    super(game, "Akki Coalflinger", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = AkkiCoalflinger;
