"use strict";
const Constants = require ("../../../Constants");
const LifeBase = require("../setAPC/Life");

class Life extends LifeBase {
  constructor (game) {
    super(game, "Life", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Life;
