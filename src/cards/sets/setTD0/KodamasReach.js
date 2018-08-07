"use strict";
const Constants = require ("../../../Constants");
const KodamasReachBase = require("../setC17/KodamasReach");

class KodamasReach extends KodamasReachBase {
  constructor (game) {
    super(game, "Kodama's Reach", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = KodamasReach;
