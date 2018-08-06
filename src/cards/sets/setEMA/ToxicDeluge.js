"use strict";
const Constants = require ("../../../Constants");
const ToxicDelugeBase = require("../setC13/ToxicDeluge");

class ToxicDeluge extends ToxicDelugeBase {
  constructor (game) {
    super(game, "Toxic Deluge", "Eternal Masters", "EMA");
  }
}

module.exports = ToxicDeluge;
