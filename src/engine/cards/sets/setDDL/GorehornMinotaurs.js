"use strict";
const Constants = require ("../../../Constants");
const GorehornMinotaursBase = require("../setE01/GorehornMinotaurs");

class GorehornMinotaurs extends GorehornMinotaursBase {
  constructor (game) {
    super(game, "Gorehorn Minotaurs", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = GorehornMinotaurs;
