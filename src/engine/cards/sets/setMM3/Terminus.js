"use strict";
const Constants = require ("../../../Constants");
const TerminusBase = require("../setC18/Terminus");

class Terminus extends TerminusBase {
  constructor (game) {
    super(game, "Terminus", "Modern Masters 2017", "MM3");
  }
}

module.exports = Terminus;
