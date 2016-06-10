"use strict";
const Constants = require ("../../../Constants");
const LastRitesBase = require("../setODY/LastRites");

class LastRites extends LastRitesBase {
  constructor (game) {
    super(game, "Last Rites", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = LastRites;
