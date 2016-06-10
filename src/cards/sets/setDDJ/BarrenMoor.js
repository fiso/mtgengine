"use strict";
const Constants = require ("../../../Constants");
const BarrenMoorBase = require("../setARC/BarrenMoor");

class BarrenMoor extends BarrenMoorBase {
  constructor (game) {
    super(game, "Barren Moor", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = BarrenMoor;
