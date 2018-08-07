"use strict";
const Constants = require ("../../../Constants");
const TerminusBase = require("../setC18/Terminus");

class Terminus extends TerminusBase {
  constructor (game) {
    super(game, "Terminus", "Avacyn Restored", "AVR");
  }
}

module.exports = Terminus;
