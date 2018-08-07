"use strict";
const Constants = require ("../../../Constants");
const SkirkShamanBase = require("../setEVG/SkirkShaman");

class SkirkShaman extends SkirkShamanBase {
  constructor (game) {
    super(game, "Skirk Shaman", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = SkirkShaman;
