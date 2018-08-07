"use strict";
const Constants = require ("../../../Constants");
const FertileThicketBase = require("../setDDR/FertileThicket");

class FertileThicket extends FertileThicketBase {
  constructor (game) {
    super(game, "Fertile Thicket", "Battle for Zendikar", "BFZ");
  }
}

module.exports = FertileThicket;
