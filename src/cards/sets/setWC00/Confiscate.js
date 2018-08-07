"use strict";
const Constants = require ("../../../Constants");
const ConfiscateBase = require("../setTD0/Confiscate");

class Confiscate extends ConfiscateBase {
  constructor (game) {
    super(game, "Confiscate", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Confiscate;
