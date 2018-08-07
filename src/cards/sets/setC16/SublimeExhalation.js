"use strict";
const Constants = require ("../../../Constants");
const SublimeExhalationBase = require("../setCM2/SublimeExhalation");

class SublimeExhalation extends SublimeExhalationBase {
  constructor (game) {
    super(game, "Sublime Exhalation", "Commander 2016", "C16");
  }
}

module.exports = SublimeExhalation;
