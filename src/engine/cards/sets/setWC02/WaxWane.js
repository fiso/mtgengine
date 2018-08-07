"use strict";
const Constants = require ("../../../Constants");
const WaxWaneBase = require("../setARC/WaxWane");

class WaxWane extends WaxWaneBase {
  constructor (game) {
    super(game, "Wax // Wane", "World Championship Decks 2002", "WC02");
  }
}

module.exports = WaxWane;
