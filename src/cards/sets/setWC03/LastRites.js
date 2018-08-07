"use strict";
const Constants = require ("../../../Constants");
const LastRitesBase = require("../setPD3/LastRites");

class LastRites extends LastRitesBase {
  constructor (game) {
    super(game, "Last Rites", "World Championship Decks 2003", "WC03");
  }
}

module.exports = LastRites;
