"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AkkiCoalflingerBase = require("../setCHK/AkkiCoalflinger.js");

class AkkiCoalflinger extends AkkiCoalflingerBase {
  constructor(game) {
    super(game, "Akki Coalflinger", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = AkkiCoalflinger;
