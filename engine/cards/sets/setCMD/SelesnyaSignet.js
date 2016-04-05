"use strict";
const Constants = require ("../../../Constants");
const SelesnyaSignetBase = require("../setC13/SelesnyaSignet");

class SelesnyaSignet extends SelesnyaSignetBase {
  constructor(game) {
    super(game, "Selesnya Signet", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SelesnyaSignet;
