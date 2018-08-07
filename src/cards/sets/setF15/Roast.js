"use strict";
const Constants = require ("../../../Constants");
const RoastBase = require("../setDTK/Roast");

class Roast extends RoastBase {
  constructor (game) {
    super(game, "Roast", "Friday Night Magic 2015", "F15");
  }
}

module.exports = Roast;
