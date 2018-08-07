"use strict";
const Constants = require ("../../../Constants");
const MitoticSlimeBase = require("../setPCA/MitoticSlime");

class MitoticSlime extends MitoticSlimeBase {
  constructor (game) {
    super(game, "Mitotic Slime", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = MitoticSlime;
