"use strict";
const Constants = require ("../../../Constants");
const VolrathsStrongholdBase = require("../setTPR/VolrathsStronghold");

class VolrathsStronghold extends VolrathsStrongholdBase {
  constructor (game) {
    super(game, "Volrath's Stronghold", "World Championship Decks 1998", "WC98");
  }
}

module.exports = VolrathsStronghold;
