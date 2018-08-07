"use strict";
const Constants = require ("../../../Constants");
const BottleGnomesBase = require("../setCM2/BottleGnomes");

class BottleGnomes extends BottleGnomesBase {
  constructor (game) {
    super(game, "Bottle Gnomes", "World Championship Decks 1998", "WC98");
  }
}

module.exports = BottleGnomes;
