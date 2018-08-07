"use strict";
const Constants = require ("../../../Constants");
const ForceofWillBase = require("../setMP2/ForceofWill");

class ForceofWill extends ForceofWillBase {
  constructor (game) {
    super(game, "Force of Will", "World Championship Decks 1997", "WC97");
  }
}

module.exports = ForceofWill;
