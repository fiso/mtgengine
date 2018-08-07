"use strict";
const Constants = require ("../../../Constants");
const BarrenMoorBase = require("../setC18/BarrenMoor");

class BarrenMoor extends BarrenMoorBase {
  constructor (game) {
    super(game, "Barren Moor", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = BarrenMoor;
