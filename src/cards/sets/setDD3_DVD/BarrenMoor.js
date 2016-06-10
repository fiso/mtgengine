"use strict";
const Constants = require ("../../../Constants");
const BarrenMoorBase = require("../setARC/BarrenMoor");

class BarrenMoor extends BarrenMoorBase {
  constructor (game) {
    super(game, "Barren Moor", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = BarrenMoor;
