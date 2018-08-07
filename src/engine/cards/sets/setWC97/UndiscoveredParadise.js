"use strict";
const Constants = require ("../../../Constants");
const UndiscoveredParadiseBase = require("../setPRM/UndiscoveredParadise");

class UndiscoveredParadise extends UndiscoveredParadiseBase {
  constructor (game) {
    super(game, "Undiscovered Paradise", "World Championship Decks 1997", "WC97");
  }
}

module.exports = UndiscoveredParadise;
