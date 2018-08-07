"use strict";
const Constants = require ("../../../Constants");
const ScytheclawBase = require("../setPZ1/Scytheclaw");

class Scytheclaw extends ScytheclawBase {
  constructor (game) {
    super(game, "Scytheclaw", "Commander 2015", "C15");
  }
}

module.exports = Scytheclaw;
