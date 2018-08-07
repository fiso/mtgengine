"use strict";
const Constants = require ("../../../Constants");
const BarrenMoorBase = require("../setC18/BarrenMoor");

class BarrenMoor extends BarrenMoorBase {
  constructor (game) {
    super(game, "Barren Moor", "Commander 2013", "C13");
  }
}

module.exports = BarrenMoor;
