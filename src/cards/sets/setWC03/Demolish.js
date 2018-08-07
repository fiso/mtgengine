"use strict";
const Constants = require ("../../../Constants");
const DemolishBase = require("../setXLN/Demolish");

class Demolish extends DemolishBase {
  constructor (game) {
    super(game, "Demolish", "World Championship Decks 2003", "WC03");
  }
}

module.exports = Demolish;
