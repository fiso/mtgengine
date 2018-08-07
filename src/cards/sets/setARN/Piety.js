"use strict";
const Constants = require ("../../../Constants");
const PietyBase = require("../set4ED/Piety");

class Piety extends PietyBase {
  constructor (game) {
    super(game, "Piety", "Arabian Nights", "ARN");
  }
}

module.exports = Piety;
