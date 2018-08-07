"use strict";
const Constants = require ("../../../Constants");
const RenegadeDemonBase = require("../setMTGA/RenegadeDemon");

class RenegadeDemon extends RenegadeDemonBase {
  constructor (game) {
    super(game, "Renegade Demon", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = RenegadeDemon;
