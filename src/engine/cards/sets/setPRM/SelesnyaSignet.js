"use strict";
const Constants = require ("../../../Constants");
const SelesnyaSignetBase = require("../setCMA/SelesnyaSignet");

class SelesnyaSignet extends SelesnyaSignetBase {
  constructor (game) {
    super(game, "Selesnya Signet", "Magic Online Promos", "PRM");
  }
}

module.exports = SelesnyaSignet;
