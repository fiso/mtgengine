"use strict";
const Constants = require ("../../../Constants");
const SpreadtheSicknessBase = require("../setMBS/SpreadtheSickness");

class SpreadtheSickness extends SpreadtheSicknessBase {
  constructor(game) {
    super(game, "Spread the Sickness", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = SpreadtheSickness;
