"use strict";
const Constants = require ("../../../Constants");
const JourneytoNowhereBase = require("../setCMD/JourneytoNowhere");

class JourneytoNowhere extends JourneytoNowhereBase {
  constructor (game) {
    super(game, "Journey to Nowhere", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = JourneytoNowhere;
