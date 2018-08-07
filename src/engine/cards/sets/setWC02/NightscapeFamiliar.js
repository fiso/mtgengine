"use strict";
const Constants = require ("../../../Constants");
const NightscapeFamiliarBase = require("../setE01/NightscapeFamiliar");

class NightscapeFamiliar extends NightscapeFamiliarBase {
  constructor (game) {
    super(game, "Nightscape Familiar", "World Championship Decks 2002", "WC02");
  }
}

module.exports = NightscapeFamiliar;
