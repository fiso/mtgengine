"use strict";
const Constants = require ("../../../Constants");
const OverrunBase = require("../setCMA/Overrun");

class Overrun extends OverrunBase {
  constructor (game) {
    super(game, "Overrun", "World Championship Decks 1999", "WC99");
  }
}

module.exports = Overrun;
