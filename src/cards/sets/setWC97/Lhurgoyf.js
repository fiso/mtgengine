"use strict";
const Constants = require ("../../../Constants");
const LhurgoyfBase = require("../setCM2/Lhurgoyf");

class Lhurgoyf extends LhurgoyfBase {
  constructor (game) {
    super(game, "Lhurgoyf", "World Championship Decks 1997", "WC97");
  }
}

module.exports = Lhurgoyf;
