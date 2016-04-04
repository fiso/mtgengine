"use strict";
const Constants = require ("../../../Constants");
const OverrunBase = require("../setATH/Overrun");

class Overrun extends OverrunBase {
  constructor(game) {
    super(game, "Overrun", "Commander 2014", "C14");
  }
}

module.exports = Overrun;
