"use strict";
const Constants = require ("../../../Constants");
const BarrenMoorBase = require("../setC18/BarrenMoor");

class BarrenMoor extends BarrenMoorBase {
  constructor (game) {
    super(game, "Barren Moor", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = BarrenMoor;
