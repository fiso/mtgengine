"use strict";
const Constants = require ("../../../Constants");
const AdarkarWastesBase = require("../set10E/AdarkarWastes");

class AdarkarWastes extends AdarkarWastesBase {
  constructor (game) {
    super(game, "Adarkar Wastes", "World Championship Decks 2000", "WC00");
  }
}

module.exports = AdarkarWastes;
