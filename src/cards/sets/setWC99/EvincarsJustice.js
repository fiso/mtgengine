"use strict";
const Constants = require ("../../../Constants");
const EvincarsJusticeBase = require("../setCMA/EvincarsJustice");

class EvincarsJustice extends EvincarsJusticeBase {
  constructor (game) {
    super(game, "Evincar's Justice", "World Championship Decks 1999", "WC99");
  }
}

module.exports = EvincarsJustice;
