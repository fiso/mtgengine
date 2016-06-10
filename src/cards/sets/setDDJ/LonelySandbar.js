"use strict";
const Constants = require ("../../../Constants");
const LonelySandbarBase = require("../setC13/LonelySandbar");

class LonelySandbar extends LonelySandbarBase {
  constructor (game) {
    super(game, "Lonely Sandbar", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = LonelySandbar;
