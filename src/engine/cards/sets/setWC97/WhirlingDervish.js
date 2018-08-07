"use strict";
const Constants = require ("../../../Constants");
const WhirlingDervishBase = require("../setTSB/WhirlingDervish");

class WhirlingDervish extends WhirlingDervishBase {
  constructor (game) {
    super(game, "Whirling Dervish", "World Championship Decks 1997", "WC97");
  }
}

module.exports = WhirlingDervish;
