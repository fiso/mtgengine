"use strict";
const Constants = require ("../../../Constants");
const BottleGnomesBase = require("../setCM2/BottleGnomes");

class BottleGnomes extends BottleGnomesBase {
  constructor (game) {
    super(game, "Bottle Gnomes", "Ninth Edition", "9ED");
  }
}

module.exports = BottleGnomes;
