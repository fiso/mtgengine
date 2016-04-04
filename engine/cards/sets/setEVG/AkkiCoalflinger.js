"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AkkiCoalflingerBase = require("../setCHK/AkkiCoalflinger.js");

class AkkiCoalflinger extends AkkiCoalflingerBase {
  constructor(game) {
    super(game, "Akki Coalflinger", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = AkkiCoalflinger;
