"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SuChiBase = require("../setATQ/SuChi.js");

class SuChi extends SuChiBase {
  constructor(game) {
    super(game, "Su-Chi", "Masters Edition", "MED");
  }
}

module.exports = SuChi;
