"use strict";
const Constants = require ("../../../Constants");
const SelesnyaSignetBase = require("../setCMA/SelesnyaSignet");

class SelesnyaSignet extends SelesnyaSignetBase {
  constructor (game) {
    super(game, "Selesnya Signet", "Commander 2013", "C13");
  }
}

module.exports = SelesnyaSignet;
