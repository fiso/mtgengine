"use strict";
const Constants = require ("../../../Constants");
const BottleGnomesBase = require("../setCM2/BottleGnomes");

class BottleGnomes extends BottleGnomesBase {
  constructor (game) {
    super(game, "Bottle Gnomes", "Commander 2014", "C14");
  }
}

module.exports = BottleGnomes;
