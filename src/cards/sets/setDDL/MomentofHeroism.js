"use strict";
const Constants = require ("../../../Constants");
const MomentofHeroismBase = require("../setE01/MomentofHeroism");

class MomentofHeroism extends MomentofHeroismBase {
  constructor (game) {
    super(game, "Moment of Heroism", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = MomentofHeroism;
