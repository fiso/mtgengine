"use strict";
const Constants = require ("../../../Constants");
const BarrenMoorBase = require("../setC18/BarrenMoor");

class BarrenMoor extends BarrenMoorBase {
  constructor (game) {
    super(game, "Barren Moor", "World Championship Decks 2003", "WC03");
  }
}

module.exports = BarrenMoor;
