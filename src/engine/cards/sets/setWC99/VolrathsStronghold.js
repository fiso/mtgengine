"use strict";
const Constants = require ("../../../Constants");
const VolrathsStrongholdBase = require("../setTPR/VolrathsStronghold");

class VolrathsStronghold extends VolrathsStrongholdBase {
  constructor (game) {
    super(game, "Volrath's Stronghold", "World Championship Decks 1999", "WC99");
  }
}

module.exports = VolrathsStronghold;
