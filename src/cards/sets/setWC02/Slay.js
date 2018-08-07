"use strict";
const Constants = require ("../../../Constants");
const SlayBase = require("../setDDE/Slay");

class Slay extends SlayBase {
  constructor (game) {
    super(game, "Slay", "World Championship Decks 2002", "WC02");
  }
}

module.exports = Slay;
