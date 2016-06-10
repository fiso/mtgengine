"use strict";
const Constants = require ("../../../Constants");
const BarrenMoorBase = require("../setARC/BarrenMoor");

class BarrenMoor extends BarrenMoorBase {
  constructor (game) {
    super(game, "Barren Moor", "Vintage Masters", "VMA");
  }
}

module.exports = BarrenMoor;
