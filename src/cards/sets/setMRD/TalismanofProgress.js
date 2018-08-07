"use strict";
const Constants = require ("../../../Constants");
const TalismanofProgressBase = require("../setTD2/TalismanofProgress");

class TalismanofProgress extends TalismanofProgressBase {
  constructor (game) {
    super(game, "Talisman of Progress", "Mirrodin", "MRD");
  }
}

module.exports = TalismanofProgress;
