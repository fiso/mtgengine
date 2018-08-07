"use strict";
const Constants = require ("../../../Constants");
const KathariBomberBase = require("../setMM3/KathariBomber");

class KathariBomber extends KathariBomberBase {
  constructor (game) {
    super(game, "Kathari Bomber", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = KathariBomber;
