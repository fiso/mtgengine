"use strict";
const Constants = require ("../../../Constants");
const FecundityBase = require("../setC13/Fecundity");

class Fecundity extends FecundityBase {
  constructor (game) {
    super(game, "Fecundity", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Fecundity;
