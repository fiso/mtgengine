"use strict";
const Constants = require ("../../../Constants");
const BarrenMoorBase = require("../setC18/BarrenMoor");

class BarrenMoor extends BarrenMoorBase {
  constructor (game) {
    super(game, "Barren Moor", "Vintage Masters", "VMA");
  }
}

module.exports = BarrenMoor;
