"use strict";
const Constants = require ("../../../Constants");
const BarrenMoorBase = require("../setARC/BarrenMoor");

class BarrenMoor extends BarrenMoorBase {
  constructor(game) {
    super(game, "Barren Moor", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = BarrenMoor;
