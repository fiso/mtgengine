"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LastRitesBase = require("../setODY/LastRites.js");

class LastRites extends LastRitesBase {
  constructor(game) {
    super(game, "Last Rites", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = LastRites;
