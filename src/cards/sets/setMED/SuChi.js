"use strict";
const Constants = require ("../../../Constants");
const SuChiBase = require("../setVMA/SuChi");

class SuChi extends SuChiBase {
  constructor (game) {
    super(game, "Su-Chi", "Masters Edition", "MED");
  }
}

module.exports = SuChi;
