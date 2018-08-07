"use strict";
const Constants = require ("../../../Constants");
const GorehornMinotaursBase = require("../setE01/GorehornMinotaurs");

class GorehornMinotaurs extends GorehornMinotaursBase {
  constructor (game) {
    super(game, "Gorehorn Minotaurs", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = GorehornMinotaurs;
