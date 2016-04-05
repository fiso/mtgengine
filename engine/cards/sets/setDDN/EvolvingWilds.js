"use strict";
const Constants = require ("../../../Constants");
const EvolvingWildsBase = require("../setBFZ/EvolvingWilds");

class EvolvingWilds extends EvolvingWildsBase {
  constructor(game) {
    super(game, "Evolving Wilds", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = EvolvingWilds;
