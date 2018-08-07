"use strict";
const Constants = require ("../../../Constants");
const FireslingerBase = require("../setJVC/Fireslinger");

class Fireslinger extends FireslingerBase {
  constructor (game) {
    super(game, "Fireslinger", "World Championship Decks 1999", "WC99");
  }
}

module.exports = Fireslinger;
