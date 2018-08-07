"use strict";
const Constants = require ("../../../Constants");
const SelesnyaSignetBase = require("../setCMA/SelesnyaSignet");

class SelesnyaSignet extends SelesnyaSignetBase {
  constructor (game) {
    super(game, "Selesnya Signet", "Modern Masters 2017", "MM3");
  }
}

module.exports = SelesnyaSignet;
