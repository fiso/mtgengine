"use strict";
const Constants = require ("../../../Constants");
const TickingGnomesBase = require("../setEMA/TickingGnomes");

class TickingGnomes extends TickingGnomesBase {
  constructor (game) {
    super(game, "Ticking Gnomes", "World Championship Decks 1999", "WC99");
  }
}

module.exports = TickingGnomes;
