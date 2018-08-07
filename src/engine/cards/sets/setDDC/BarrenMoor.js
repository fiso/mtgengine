"use strict";
const Constants = require ("../../../Constants");
const BarrenMoorBase = require("../setC18/BarrenMoor");

class BarrenMoor extends BarrenMoorBase {
  constructor (game) {
    super(game, "Barren Moor", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = BarrenMoor;
