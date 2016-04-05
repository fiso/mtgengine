"use strict";
const Constants = require ("../../../Constants");
const DelugeBase = require("../setDPA/Deluge");

class Deluge extends DelugeBase {
  constructor(game) {
    super(game, "Deluge", "Odyssey", "ODY");
  }
}

module.exports = Deluge;
