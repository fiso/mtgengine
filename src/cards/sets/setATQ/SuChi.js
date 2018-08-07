"use strict";
const Constants = require ("../../../Constants");
const SuChiBase = require("../setVMA/SuChi");

class SuChi extends SuChiBase {
  constructor (game) {
    super(game, "Su-Chi", "Antiquities", "ATQ");
  }
}

module.exports = SuChi;
