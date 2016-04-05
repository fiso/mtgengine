"use strict";
const Constants = require ("../../../Constants");
const NephaliaSmugglerBase = require("../setAVR/NephaliaSmuggler");

class NephaliaSmuggler extends NephaliaSmugglerBase {
  constructor(game) {
    super(game, "Nephalia Smuggler", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = NephaliaSmuggler;
