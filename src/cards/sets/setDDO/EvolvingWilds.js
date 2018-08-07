"use strict";
const Constants = require ("../../../Constants");
const EvolvingWildsBase = require("../setC18/EvolvingWilds");

class EvolvingWilds extends EvolvingWildsBase {
  constructor (game) {
    super(game, "Evolving Wilds", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = EvolvingWilds;
