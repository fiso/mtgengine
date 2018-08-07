"use strict";
const Constants = require ("../../../Constants");
const UndiscoveredParadiseBase = require("../setPRM/UndiscoveredParadise");

class UndiscoveredParadise extends UndiscoveredParadiseBase {
  constructor (game) {
    super(game, "Undiscovered Paradise", "World Championship Decks 1998", "WC98");
  }
}

module.exports = UndiscoveredParadise;
