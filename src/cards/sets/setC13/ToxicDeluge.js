"use strict";
const Constants = require ("../../../Constants");
const ToxicDelugeBase = require("../setEMA/ToxicDeluge");

class ToxicDeluge extends ToxicDelugeBase {
  constructor (game) {
    super(game, "Toxic Deluge", "Commander 2013", "C13");
  }
}

module.exports = ToxicDeluge;
