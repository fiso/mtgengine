"use strict";
const Constants = require ("../../../Constants");
const IslandBase = require("../setARC/Island");

class Island extends IslandBase {
  constructor(game) {
    super(game, "Island", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Island;
