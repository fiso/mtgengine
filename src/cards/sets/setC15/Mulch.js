"use strict";
const Constants = require ("../../../Constants");
const MulchBase = require("../setCMA/Mulch");

class Mulch extends MulchBase {
  constructor (game) {
    super(game, "Mulch", "Commander 2015", "C15");
  }
}

module.exports = Mulch;
