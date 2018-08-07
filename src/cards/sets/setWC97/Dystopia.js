"use strict";
const Constants = require ("../../../Constants");
const DystopiaBase = require("../setME2/Dystopia");

class Dystopia extends DystopiaBase {
  constructor (game) {
    super(game, "Dystopia", "World Championship Decks 1997", "WC97");
  }
}

module.exports = Dystopia;
