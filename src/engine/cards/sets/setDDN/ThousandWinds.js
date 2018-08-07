"use strict";
const Constants = require ("../../../Constants");
const ThousandWindsBase = require("../setKTK/ThousandWinds");

class ThousandWinds extends ThousandWindsBase {
  constructor (game) {
    super(game, "Thousand Winds", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = ThousandWinds;
