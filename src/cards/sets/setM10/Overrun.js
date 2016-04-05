"use strict";
const Constants = require ("../../../Constants");
const OverrunBase = require("../setATH/Overrun");

class Overrun extends OverrunBase {
  constructor(game) {
    super(game, "Overrun", "Magic 2010", "M10");
  }
}

module.exports = Overrun;
