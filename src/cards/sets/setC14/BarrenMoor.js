"use strict";
const Constants = require ("../../../Constants");
const BarrenMoorBase = require("../setARC/BarrenMoor");

class BarrenMoor extends BarrenMoorBase {
  constructor (game) {
    super(game, "Barren Moor", "Commander 2014", "C14");
  }
}

module.exports = BarrenMoor;
