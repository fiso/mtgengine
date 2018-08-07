"use strict";
const Constants = require ("../../../Constants");
const FamineBase = require("../setVMA/Famine");

class Famine extends FamineBase {
  constructor (game) {
    super(game, "Famine", "Commander 2013", "C13");
  }
}

module.exports = Famine;
