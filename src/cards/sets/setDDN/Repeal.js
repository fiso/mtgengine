"use strict";
const Constants = require ("../../../Constants");
const RepealBase = require("../setIMA/Repeal");

class Repeal extends RepealBase {
  constructor (game) {
    super(game, "Repeal", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = Repeal;
