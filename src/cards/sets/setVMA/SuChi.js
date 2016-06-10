"use strict";
const Constants = require ("../../../Constants");
const SuChiBase = require("../setATQ/SuChi");

class SuChi extends SuChiBase {
  constructor (game) {
    super(game, "Su-Chi", "Vintage Masters", "VMA");
  }
}

module.exports = SuChi;
