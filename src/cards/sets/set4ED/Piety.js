"use strict";
const Constants = require ("../../../Constants");
const PietyBase = require("../setARN/Piety");

class Piety extends PietyBase {
  constructor (game) {
    super(game, "Piety", "Fourth Edition", "4ED");
  }
}

module.exports = Piety;
