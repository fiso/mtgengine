"use strict";
const Constants = require ("../../../Constants");
const FuneralCharmBase = require("../setTSB/FuneralCharm");

class FuneralCharm extends FuneralCharmBase {
  constructor(game) {
    super(game, "Funeral Charm", "Visions", "VIS");
  }
}

module.exports = FuneralCharm;
