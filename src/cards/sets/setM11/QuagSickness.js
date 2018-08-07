"use strict";
const Constants = require ("../../../Constants");
const QuagSicknessBase = require("../setM14/QuagSickness");

class QuagSickness extends QuagSicknessBase {
  constructor (game) {
    super(game, "Quag Sickness", "Magic 2011", "M11");
  }
}

module.exports = QuagSickness;
