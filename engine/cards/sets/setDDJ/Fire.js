"use strict";
const Constants = require ("../../../Constants");
const FireBase = require("../setAPC/Fire");

class Fire extends FireBase {
  constructor(game) {
    super(game, "Fire", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Fire;
