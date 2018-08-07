"use strict";
const Constants = require ("../../../Constants");
const CivicWayfinderBase = require("../setDDR/CivicWayfinder");

class CivicWayfinder extends CivicWayfinderBase {
  constructor (game) {
    super(game, "Civic Wayfinder", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = CivicWayfinder;
