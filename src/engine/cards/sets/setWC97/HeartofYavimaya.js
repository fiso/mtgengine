"use strict";
const Constants = require ("../../../Constants");
const HeartofYavimayaBase = require("../setME2/HeartofYavimaya");

class HeartofYavimaya extends HeartofYavimayaBase {
  constructor (game) {
    super(game, "Heart of Yavimaya", "World Championship Decks 1997", "WC97");
  }
}

module.exports = HeartofYavimaya;
