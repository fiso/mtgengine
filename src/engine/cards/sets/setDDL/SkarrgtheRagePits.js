"use strict";
const Constants = require ("../../../Constants");
const SkarrgtheRagePitsBase = require("../setPCA/SkarrgtheRagePits");

class SkarrgtheRagePits extends SkarrgtheRagePitsBase {
  constructor (game) {
    super(game, "Skarrg, the Rage Pits", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = SkarrgtheRagePits;
