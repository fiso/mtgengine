"use strict";
const Constants = require ("../../../Constants");
const QuagSicknessBase = require("../setM11/QuagSickness");

class QuagSickness extends QuagSicknessBase {
  constructor (game) {
    super(game, "Quag Sickness", "Magic 2014 Core Set", "M14");
  }
}

module.exports = QuagSickness;
