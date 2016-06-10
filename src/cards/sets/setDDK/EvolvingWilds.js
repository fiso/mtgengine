"use strict";
const Constants = require ("../../../Constants");
const EvolvingWildsBase = require("../setBFZ/EvolvingWilds");

class EvolvingWilds extends EvolvingWildsBase {
  constructor (game) {
    super(game, "Evolving Wilds", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = EvolvingWilds;
