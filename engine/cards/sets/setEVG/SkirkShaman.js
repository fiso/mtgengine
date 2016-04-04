"use strict";
const Constants = require ("../../../Constants");
const SkirkShamanBase = require("../setDD3_EVG/SkirkShaman");

class SkirkShaman extends SkirkShamanBase {
  constructor(game) {
    super(game, "Skirk Shaman", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = SkirkShaman;
