"use strict";
const Constants = require ("../../../Constants");
const WeeDragonautsBase = require("../setpARL/WeeDragonauts");

class WeeDragonauts extends WeeDragonautsBase {
  constructor(game) {
    super(game, "Wee Dragonauts", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = WeeDragonauts;
