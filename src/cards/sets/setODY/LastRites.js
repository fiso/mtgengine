"use strict";
const Constants = require ("../../../Constants");
const LastRitesBase = require("../setPD3/LastRites");

class LastRites extends LastRitesBase {
  constructor (game) {
    super(game, "Last Rites", "Odyssey", "ODY");
  }
}

module.exports = LastRites;
