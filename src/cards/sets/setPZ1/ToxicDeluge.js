"use strict";
const Constants = require ("../../../Constants");
const ToxicDelugeBase = require("../setEMA/ToxicDeluge");

class ToxicDeluge extends ToxicDelugeBase {
  constructor (game) {
    super(game, "Toxic Deluge", "Legendary Cube", "PZ1");
  }
}

module.exports = ToxicDeluge;
